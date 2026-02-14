import axios from 'axios';
import { ProjectInputs, ProjectResults } from '../types/project';

const api = axios.create({
  baseURL: 'http://localhost:8000', // backend FastAPI
});

export const calculateProject = async (
  inputs: ProjectInputs
): Promise<ProjectResults> => {
  const response = await api.post('/calculate', inputs);
  return response.data;
};