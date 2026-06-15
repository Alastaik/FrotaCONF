import { useState, useEffect } from 'react';
import type { FC, FormEvent } from 'react';
import Sidebar from '../components/Sidebar';
import VehicleCard from '../components/VehicleCard';
import type { IVeiculo } from '../types';
import { PlusCircle, RefreshCw } from 'lucide-react';

const API_URL = 'http://localhost:8080/api/veiculos';
const HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Basic YWRtaW46YWRtaW4='
};

const Frota: FC = () => {
  const [veiculos, setVeiculos] = useState<IVeiculo[]>([]);
  const [filtroAtual, setFiltroAtual] = useState('Todos');
  const [loading, setLoading] = useState(true);

  // States for new vehicle form
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [status, setStatus] = useState('Em Dia');
  const [showModal, setShowModal] = useState(false);

  const carregarVeiculos = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, { headers: HEADERS });
      if (response.ok) {
        const data = await response.json();
        setVeiculos(data);
      }
    } catch (error) {
      console.error('Falha na conexão:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarVeiculos();
  }, []);

  const alterarStatus = async (id: number) => {
    const v = veiculos.find(v => v.id === id);
    if (!v) return;
    
    const novoStatus = v.status === 'Em Dia' ? 'Manutenção Pendente' : 'Em Dia';
    try {
      const response = await fetch(`${API_URL}/${id}/status`, {
        method: 'PUT',
        headers: HEADERS,
        body: JSON.stringify({ status: novoStatus })
      });
      if (response.ok) {
        carregarVeiculos();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const adicionarVeiculo = async (e: FormEvent) => {
    e.preventDefault();
    if (!placa || !modelo) return;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({ placa, modelo, status })
      });
      if (response.ok) {
        setShowModal(false);
        setPlaca('');
        setModelo('');
        setStatus('Em Dia');
        carregarVeiculos();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const veiculosFiltrados = filtroAtual === 'Todos' 
    ? veiculos 
    : veiculos.filter(v => v.status === filtroAtual);

  return (
    <div className="row">
      <div className="col-12 col-md-4 col-lg-3 mb-4">
        <Sidebar filtroAtual={filtroAtual} setFiltro={setFiltroAtual} />
      </div>
      
      <div className="col-12 col-md-8 col-lg-9">
        <div className="glass-panel p-4 mb-4 d-flex justify-content-between align-items-center">
          <h2 className="h4 text-white m-0 d-flex align-items-center">
            <span className="me-2">Listagem da Frota</span>
            <span className="badge bg-primary rounded-pill fs-6">{veiculosFiltrados.length}</span>
          </h2>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-light btn-sm" onClick={carregarVeiculos}>
              <RefreshCw size={18} className={loading ? "spin" : ""} />
            </button>
            <button className="btn btn-primary-custom d-flex align-items-center" onClick={() => setShowModal(true)}>
              <PlusCircle size={18} className="me-2" /> Adicionar
            </button>
          </div>
        </div>

        {loading ? (
          <div className="row">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="col-12 col-xl-6 mb-4">
                <div className="glass-panel p-4 skeleton h-100" style={{ minHeight: '220px' }}></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            {veiculosFiltrados.length === 0 ? (
              <div className="col-12">
                <div className="glass-panel p-5 text-center text-secondary">
                  <p className="fs-5 mb-0">Nenhum veículo encontrado para este filtro.</p>
                </div>
              </div>
            ) : (
              veiculosFiltrados.map(v => (
                <VehicleCard key={v.id} veiculo={v} onAlterarStatus={alterarStatus} />
              ))
            )}
          </div>
        )}
      </div>

      {/* Modal Customizado (React way) */}
      {showModal && (
        <div className="modal d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content glass-panel border-0">
              <div className="modal-header border-bottom border-secondary">
                <h5 className="modal-title text-white">Adicionar Novo Veículo</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={adicionarVeiculo}>
                  <div className="mb-3">
                    <label className="form-label text-light">Placa</label>
                    <input type="text" className="form-control bg-dark text-white border-secondary" value={placa} onChange={e => setPlaca(e.target.value)} required placeholder="ABC-1234" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-light">Modelo</label>
                    <input type="text" className="form-control bg-dark text-white border-secondary" value={modelo} onChange={e => setModelo(e.target.value)} required placeholder="Marca e Modelo" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-light">Status Inicial</label>
                    <select className="form-select bg-dark text-white border-secondary" value={status} onChange={e => setStatus(e.target.value)}>
                      <option value="Em Dia">Em Dia</option>
                      <option value="Manutenção Pendente">Manutenção Pendente</option>
                    </select>
                  </div>
                  <div className="d-flex justify-content-end gap-2">
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                    <button type="submit" className="btn btn-primary-custom">Salvar Veículo</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Frota;
