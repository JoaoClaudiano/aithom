import { useState } from 'react';
import { ProjectInputs } from '../types/project';

interface Props {
  onSubmit: (inputs: ProjectInputs) => void;
}

const defaultInputs: ProjectInputs = {
  areaTerreno: 5000,
  areaVendavel: 4000,
  precoM2: 9000,
  custoM2: 3000,
  prazoObraMeses: 24,
  curvaVendas: Array(24).fill(4.16), // % vendido por mês
  curvaFisica: Array(24).fill(4.16), // % obra por mês
  comissaoPerc: 5,
  marketingPerc: 3,
  tributosPerc: 5,
  capitalProprioPerc: 40,
  financiamentoPerc: 60,
  taxaJurosFin: 1.2,
  tirAlvo: 18,
};

export const InputForm: React.FC<Props> = ({ onSubmit }) => {
  const [inputs, setInputs] = useState<ProjectInputs>(defaultInputs);

  const handleChange = (field: keyof ProjectInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Área do Terreno (m²)</label>
        <input
          type="number"
          value={inputs.areaTerreno}
          onChange={e => handleChange('areaTerreno', +e.target.value)}
        />
      </div>

      <div>
        <label>Área Vendável (m²)</label>
        <input
          type="number"
          value={inputs.areaVendavel}
          onChange={e => handleChange('areaVendavel', +e.target.value)}
        />
      </div>

      <div>
        <label>Preço m² (R$)</label>
        <input
          type="number"
          value={inputs.precoM2}
          onChange={e => handleChange('precoM2', +e.target.value)}
        />
      </div>

      {/* Outros campos similares */}

      <button type="submit">Calcular</button>
    </form>
  );
};