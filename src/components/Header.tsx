import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Truck } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="glass-header py-3">
      <div className="container d-flex flex-wrap justify-content-center">
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <Truck className="me-2 text-primary" size={28} />
          <span className="fs-4 fw-bold">FrotaCONF</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active bg-primary' : ''}`}>
              Início
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/frota" className={({ isActive }) => `nav-link ${isActive ? 'active bg-primary' : ''}`}>
              Frota
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
