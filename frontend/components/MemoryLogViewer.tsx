import { ProjectResults } from '../types/project';

interface Props {
  results: ProjectResults | null;
}

export const MemoryLogViewer: React.FC<Props> = ({ results }) => {
  if (!results || !results.memoriaCalculo) return <div>Nenhuma memória de cálculo</div>;

  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
      <pre>{JSON.stringify(results.memoriaCalculo, null, 2)}</pre>
    </div>
  );
};