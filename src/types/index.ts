export interface IVeiculo {
  id: number;
  placa: string;
  modelo: string;
  status: string;
}

export interface ICardVeiculoProps {
  veiculo: IVeiculo;
  onAlterarStatus: (id: number) => void;
}

export interface IDashboardProps {
  veiculos: IVeiculo[];
}

export interface IAreaPrincipalProps {
  veiculos: IVeiculo[];
  onAlterarStatus: (id: number) => void;
}

export interface IBarraLateralProps {
  onFiltrar: (filtro: string) => void;
  filtroAtual: string;
}
