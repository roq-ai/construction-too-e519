import queryString from 'query-string';
import { StoreInterface, StoreGetQueryInterface } from 'interfaces/store';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getStores = async (query?: StoreGetQueryInterface): Promise<PaginatedInterface<StoreInterface>> => {
  return fetcher('/api/stores', {}, query);
};

export const createStore = async (store: StoreInterface) => {
  return fetcher('/api/stores', { method: 'POST', body: JSON.stringify(store) });
};

export const updateStoreById = async (id: string, store: StoreInterface) => {
  return fetcher(`/api/stores/${id}`, { method: 'PUT', body: JSON.stringify(store) });
};

export const getStoreById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/stores/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteStoreById = async (id: string) => {
  return fetcher(`/api/stores/${id}`, { method: 'DELETE' });
};
