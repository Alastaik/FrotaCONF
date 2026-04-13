import type { IBarraLateralProps } from '../types';

export function BarraLateral(props: IBarraLateralProps): string {
  const { filtroAtual } = props;

  const classeAtiva = (filtro: string): string => {
    return filtroAtual === filtro ? 'btn-primary' : 'btn-outline-primary';
  };

  return `
    <aside class="bg-light p-3 rounded">
      <h5>Filtros</h5>
      <hr />
      <p class="text-muted small">Filtrar por status:</p>

      <div class="d-grid gap-2">
        <button class="btn ${classeAtiva('Todos')} btn-sm" data-filtro="Todos">
          Todos
        </button>
        <button class="btn ${classeAtiva('Em Dia')} btn-sm" data-filtro="Em Dia">
          Em Dia
        </button>
        <button class="btn ${classeAtiva('Manutenção Pendente')} btn-sm" data-filtro="Manutenção Pendente">
          Manutenção Pendente
        </button>
      </div>
    </aside>
  `;
}
