import { ProjectResults } from '../types/project';

interface Props {
  results: ProjectResults | null;
}

export const ResultsPanel: React.FC<Props> = ({ results }) => {
  if (!results) return <div>Nenhum resultado ainda</div>;

  return (
    <div>
      <h2>Resultados do Projeto</h2>
      <p>VGV: R$ {results.vgv.toLocaleString()}</p>
      <p>Custo Total: R$ {results.custoTotal.toLocaleString()}</p>
      <p>TIR: {results.tir}%</p>
      <p>VPL: R$ {results.vpl.toLocaleString()}</p>
      <p>Margem: {results.margem}%</p>
      <p>Valor Máximo do Terreno: R$ {results.valorMaxTerreno.toLocaleString()}</p>
    </div>
  );
};