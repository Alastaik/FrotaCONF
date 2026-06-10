import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Settings, Activity } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container py-4">
      <div className="p-5 mb-4 glass-panel rounded-3 text-center">
        <div className="container-fluid py-5">
          <Activity size={48} className="text-primary mb-3" />
          <h1 className="display-5 fw-bold text-white mb-3">Bem-vindo ao FrotaCONF</h1>
          <p className="col-md-8 mx-auto fs-5 text-secondary">
            O sistema premium de gerenciamento de frota. Monitore seus veículos, controle status de manutenção e garanta a operação perfeita de sua empresa com um dashboard dinâmico e seguro.
          </p>
          <Link to="/frota" className="btn btn-primary-custom btn-lg mt-4 px-5 rounded-pill shadow">
            Gerenciar Frota
          </Link>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6 mb-4">
          <div className="h-100 p-5 glass-panel rounded-3 card-hover-effect">
            <div className="d-flex align-items-center mb-3">
              <ShieldCheck className="text-success me-3" size={32} />
              <h2 className="h3 text-white m-0">Veículos em Dia</h2>
            </div>
            <p className="text-secondary">Monitore os veículos que estão com a documentação e manutenção rigorosamente em dia, prontos para qualquer operação logística de imediato.</p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="h-100 p-5 glass-panel rounded-3 card-hover-effect">
            <div className="d-flex align-items-center mb-3">
              <Settings className="text-warning me-3" size={32} />
              <h2 className="h3 text-white m-0">Manutenções</h2>
            </div>
            <p className="text-secondary">Acompanhe veículos que necessitam de reparos. O controle de manutenção preventiva e corretiva garante longevidade e economia para sua frota.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
