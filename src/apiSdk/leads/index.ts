import queryString from 'query-string';
import { LeadInterface, LeadGetQueryInterface } from 'interfaces/lead';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLeads = async (query?: LeadGetQueryInterface): Promise<PaginatedInterface<LeadInterface>> => {
  return fetcher('/api/leads', {}, query);
};

export const createLead = async (lead: LeadInterface) => {
  return fetcher('/api/leads', { method: 'POST', body: JSON.stringify(lead) });
};

export const updateLeadById = async (id: string, lead: LeadInterface) => {
  return fetcher(`/api/leads/${id}`, { method: 'PUT', body: JSON.stringify(lead) });
};

export const getLeadById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/leads/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteLeadById = async (id: string) => {
  return fetcher(`/api/leads/${id}`, { method: 'DELETE' });
};
