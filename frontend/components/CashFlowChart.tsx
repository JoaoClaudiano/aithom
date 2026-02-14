import { ProjectResults } from '../types/project';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface Props {
  results: ProjectResults | null;
}

export const CashFlowChart: React.FC<Props> = ({ results }) => {
  if (!results) return <div>Nenhum fluxo para mostrar</div>;

  const data = results.fluxoCaixa.map((value, idx) => ({
    month: idx + 1,
    fluxo: value,
  }));

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" label={{ value: 'Mês', position: 'insideBottomRight' }} />
      <YAxis label={{ value: 'Fluxo (R$)', angle: -90, position: 'insideLeft' }} />
      <Tooltip formatter={(value: number) => `R$ ${value.toLocaleString()}`} />
      <Line type="monotone" dataKey="fluxo" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  );
};