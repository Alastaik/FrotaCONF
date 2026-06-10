import React from 'react';
import { Car, Wrench, CheckCircle } from 'lucide-react';
import { IVeiculo } from '../types';

interface VehicleCardProps {
  veiculo: IVeiculo;
  onAlterarStatus: (id: number) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ veiculo, onAlterarStatus }) => {
  const isEmDia = veiculo.status === 'Em Dia';

  return (
    <div className="col-12 col-xl-6 mb-4">
      <div className="glass-panel p-4 h-100 card-hover-effect d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="d-flex align-items-center">
            <div className={`p-3 rounded-circle me-3 ${isEmDia ? 'bg-success bg-opacity-10' : 'bg-warning bg-opacity-10'}`}>
              <Car size={28} className={isEmDia ? 'text-success' : 'text-warning'} />
            </div>
            <div>
              <h4 className="mb-1 text-white fw-bold">{veiculo.placa}</h4>
              <h6 className="text-secondary mb-0">{veiculo.modelo}</h6>
            </div>
          </div>
          <span className={`badge rounded-pill ${isEmDia ? 'bg-success' : 'bg-warning text-dark'} px-3 py-2 shadow-sm`}>
            {veiculo.status}
          </span>
        </div>
        
        <div className="mb-4 text-secondary small flex-grow-1">
          <p className="mb-0">
            {isEmDia 
              ? 'Veículo operando normalmente, com revisões e documentos validados. Apto para uso pela diretoria ou setor operacional.'
              : 'Veículo recolhido aguardando manutenção corretiva ou preventiva na oficina credenciada. Uso restrito.'}
          </p>
        </div>

        <div className="mt-auto">
          <button 
            className={`btn w-100 ${isEmDia ? 'btn-outline-warning' : 'btn-outline-success'} rounded-pill`}
            onClick={() => onAlterarStatus(veiculo.id)}
          >
            {isEmDia ? (
              <><Wrench size={18} className="me-2" /> Enviar para Manutenção</>
            ) : (
              <><CheckCircle size={18} className="me-2" /> Marcar como Em Dia</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
