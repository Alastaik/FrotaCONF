import './styles/custom.css';

import type { IVeiculo } from './types';
import { Cabecalho } from './components/cabecalho';
import { BarraLateral } from './components/barra-lateral';
import { AreaPrincipal } from './components/area-principal';
import { Rodape } from './components/rodape';
import { FormularioVeiculo } from './components/formulario-veiculo';

let veiculos: IVeiculo[] = [
  { id: 1, placa: 'ABC-1234', modelo: 'Fiat Uno',       status: 'Em Dia' },
  { id: 2, placa: 'DEF-5678', modelo: 'VW Gol',         status: 'Manutenção Pendente' },
  { id: 3, placa: 'GHI-9012', modelo: 'Chevrolet Onix',  status: 'Em Dia' },
  { id: 4, placa: 'JKL-3456', modelo: 'Toyota Corolla',  status: 'Em Dia' },
  { id: 5, placa: 'MNO-7890', modelo: 'Hyundai HB20',    status: 'Manutenção Pendente' },
];

let filtroAtual = 'Todos';
let proximoId = 6;

function adicionarVeiculo(placa: string, modelo: string, status: string): void {
  veiculos.push({ id: proximoId++, placa, modelo, status });
  renderizar();
}

function alterarStatus(id: number): void {
  veiculos = veiculos.map(v => {
    if (v.id === id) {
      const novoStatus = v.status === 'Em Dia' ? 'Manutenção Pendente' : 'Em Dia';
      return { ...v, status: novoStatus };
    }
    return v;
  });
  renderizar();
}

function filtrar(filtro: string): void {
  filtroAtual = filtro;
  renderizar();
}

function renderizar(): void {
  const app = document.querySelector<HTMLDivElement>('#app')!;

  const veiculosFiltrados = filtroAtual === 'Todos'
    ? veiculos
    : veiculos.filter(v => v.status === filtroAtual);

  app.innerHTML = `
    ${Cabecalho()}

    <div class="container mt-4 conteudo-principal">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="m-0">Painel de Controle</h5>
        <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalAdicionarVeiculo">
          + Adicionar Veículo
        </button>
      </div>

      <div class="row">
        <div class="col-12 col-md-3 mb-3">
          ${BarraLateral({ onFiltrar: filtrar, filtroAtual })}
        </div>

        <div class="col-12 col-md-9">
          ${AreaPrincipal({ veiculos: veiculosFiltrados, onAlterarStatus: alterarStatus })}
        </div>
      </div>
    </div>

    ${Rodape()}
    ${FormularioVeiculo()}
  `;

  document.querySelectorAll<HTMLButtonElement>('[data-alterar-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.alterarId);
      alterarStatus(id);
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-filtro]').forEach(btn => {
    btn.addEventListener('click', () => {
      const novoFiltro = btn.dataset.filtro!;
      filtrar(novoFiltro);
    });
  });

  const btnSalvar = document.getElementById('btnSalvarVeiculo');
  btnSalvar?.addEventListener('click', () => {
    const placa = (document.getElementById('inputPlaca') as HTMLInputElement).value.trim();
    const modelo = (document.getElementById('inputModelo') as HTMLInputElement).value.trim();
    const status = (document.getElementById('selectStatus') as HTMLSelectElement).value;

    if (!placa || !modelo) return;

    const modal = document.getElementById('modalAdicionarVeiculo');
    const bsModal = (window as any).bootstrap.Modal.getInstance(modal!);
    bsModal?.hide();

    adicionarVeiculo(placa, modelo, status);
  });
}

renderizar();
