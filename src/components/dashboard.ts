import type { IDashboardProps } from '../types';

export function Dashboard(props: IDashboardProps): string {
  const { veiculos } = props;

  const total = veiculos.length;
  const emDia = veiculos.filter(v => v.status === 'Em Dia').length;
  const manutencao = veiculos.filter(v => v.status === 'Manutenção Pendente').length;

  return `
    <section class="mb-4">
      <h5>Dashboard</h5>
      <div class="row g-3">

        <div class="col-4">
          <div class="card text-center">
            <div class="card-body">
              <h6 class="card-title text-muted">Total</h6>
              <p class="fs-3 fw-bold">${total}</p>
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="card text-center border-success">
            <div class="card-body">
              <h6 class="card-title text-success">Em Dia</h6>
              <p class="fs-3 fw-bold text-success">${emDia}</p>
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="card text-center border-warning">
            <div class="card-body">
              <h6 class="card-title text-warning">Manutenção</h6>
              <p class="fs-3 fw-bold text-warning">${manutencao}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
