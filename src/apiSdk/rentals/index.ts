import queryString from 'query-string';
import { RentalInterface, RentalGetQueryInterface } from 'interfaces/rental';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRentals = async (query?: RentalGetQueryInterface): Promise<PaginatedInterface<RentalInterface>> => {
  return fetcher('/api/rentals', {}, query);
};

export const createRental = async (rental: RentalInterface) => {
  return fetcher('/api/rentals', { method: 'POST', body: JSON.stringify(rental) });
};

export const updateRentalById = async (id: string, rental: RentalInterface) => {
  return fetcher(`/api/rentals/${id}`, { method: 'PUT', body: JSON.stringify(rental) });
};

export const getRentalById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/rentals/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteRentalById = async (id: string) => {
  return fetcher(`/api/rentals/${id}`, { method: 'DELETE' });
};
