import { useState } from 'react';
import { ProjectInputs, ProjectResults } from '../types/project';
import { calculateProject } from '../services/api';

export const useCalculation = () => {
  const [results, setResults] = useState<ProjectResults | null>(null);
  const [loading, setLoading] = useState(false);

  const runCalculation = async (inputs: ProjectInputs) => {
    setLoading(true);
    try {
      const res = await calculateProject(inputs);
      setResults(res);
    } catch (error) {
      console.error('Erro no cálculo do projeto', error);
    } finally {
      setLoading(false);
    }
  };

  return { results, runCalculation, loading };
};