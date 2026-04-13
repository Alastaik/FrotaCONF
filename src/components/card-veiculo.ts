import type { ICardVeiculoProps } from '../types';

export function CardVeiculo(props: ICardVeiculoProps): string {
  const { veiculo } = props;

  const badgeClass = veiculo.status === 'Em Dia' ? 'bg-success' : 'bg-warning text-dark';

  const textoBotao = veiculo.status === 'Em Dia'
    ? 'Enviar para Oficina'
    : 'Marcar como Em Dia';

  const classeBotao = veiculo.status === 'Em Dia'
    ? 'btn-outline-warning'
    : 'btn-outline-success';

  return `
    <div class="col-12 col-md-6 mb-3">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">${veiculo.modelo}</h6>
          <p class="card-text text-muted mb-1">Placa: <strong>${veiculo.placa}</strong></p>

          <p>
            Status: <span class="badge ${badgeClass}">${veiculo.status}</span>
          </p>

          <button class="btn ${classeBotao} btn-sm" data-alterar-id="${veiculo.id}">
            ${textoBotao}
          </button>
        </div>
      </div>
    </div>
  `;
}
