import type { IAreaPrincipalProps } from '../types';
import { Dashboard } from './dashboard';
import { CardVeiculo } from './card-veiculo';

export function AreaPrincipal(props: IAreaPrincipalProps): string {
  const { veiculos, onAlterarStatus } = props;

  const cardsHTML = veiculos
    .map(v => CardVeiculo({ veiculo: v, onAlterarStatus }))
    .join('');

  return `
    <main>
      ${Dashboard({ veiculos })}

      <h5>Veículos</h5>
      <div class="row">
        ${cardsHTML}
      </div>
    </main>
  `;
}
