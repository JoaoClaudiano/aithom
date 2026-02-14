export interface ProjectInputs {
  areaTerreno: number;
  areaVendavel: number;
  precoM2: number;
  custoM2: number;
  prazoObraMeses: number;
  curvaVendas: number[];
  curvaFisica: number[];
  comissaoPerc: number;
  marketingPerc: number;
  tributosPerc: number;
  capitalProprioPerc: number;
  financiamentoPerc: number;
  taxaJurosFin: number;
  tirAlvo: number;
}

export interface ProjectResults {
  vgv: number;
  custoTotal: number;
  tir: number;
  vpl: number;
  margem: number;
  valorMaxTerreno: number;
  fluxoCaixa: number[];
  memoriaCalculo: any; // JSON com detalhes transparentes
}