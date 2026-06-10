export interface IVeiculo {
  id: number;
  placa: string;
  modelo: string;
  status: string;
}

export interface IBarraLateralProps {
  onFiltrar: (filtro: string) => void;
  filtroAtual: string;
}

export interface IAreaPrincipalProps {
  veiculos: IVeiculo[];
  onAlterarStatus: (id: number) => void;
}
