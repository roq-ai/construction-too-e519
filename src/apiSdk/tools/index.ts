import queryString from 'query-string';
import { ToolInterface, ToolGetQueryInterface } from 'interfaces/tool';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTools = async (query?: ToolGetQueryInterface): Promise<PaginatedInterface<ToolInterface>> => {
  return fetcher('/api/tools', {}, query);
};

export const createTool = async (tool: ToolInterface) => {
  return fetcher('/api/tools', { method: 'POST', body: JSON.stringify(tool) });
};

export const updateToolById = async (id: string, tool: ToolInterface) => {
  return fetcher(`/api/tools/${id}`, { method: 'PUT', body: JSON.stringify(tool) });
};

export const getToolById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/tools/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteToolById = async (id: string) => {
  return fetcher(`/api/tools/${id}`, { method: 'DELETE' });
};
