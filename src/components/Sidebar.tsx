import React from 'react';
import { Filter, ListFilter } from 'lucide-react';

interface SidebarProps {
  filtroAtual: string;
  setFiltro: (filtro: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ filtroAtual, setFiltro }) => {
  const filtros = ['Todos', 'Em Dia', 'Manutenção Pendente'];

  return (
    <aside className="glass-panel p-4 h-100">
      <div className="d-flex align-items-center mb-4">
        <Filter className="text-primary me-2" size={24} />
        <h5 className="m-0 text-white fw-bold">Filtros</h5>
      </div>
      
      <p className="text-secondary small mb-3">Status do veículo:</p>

      <div className="d-flex flex-column gap-2">
        {filtros.map(filtro => {
          const isActive = filtroAtual === filtro;
          return (
            <button 
              key={filtro}
              className={`btn text-start d-flex justify-content-between align-items-center rounded-3 ${isActive ? 'btn-primary text-white shadow' : 'btn-outline-secondary text-light border-secondary border-opacity-50'}`}
              onClick={() => setFiltro(filtro)}
            >
              <span>{filtro}</span>
              {isActive && <ListFilter size={16} />}
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
