import queryString from 'query-string';
import { InvoiceInterface, InvoiceGetQueryInterface } from 'interfaces/invoice';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getInvoices = async (query?: InvoiceGetQueryInterface): Promise<PaginatedInterface<InvoiceInterface>> => {
  return fetcher('/api/invoices', {}, query);
};

export const createInvoice = async (invoice: InvoiceInterface) => {
  return fetcher('/api/invoices', { method: 'POST', body: JSON.stringify(invoice) });
};

export const updateInvoiceById = async (id: string, invoice: InvoiceInterface) => {
  return fetcher(`/api/invoices/${id}`, { method: 'PUT', body: JSON.stringify(invoice) });
};

export const getInvoiceById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/invoices/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteInvoiceById = async (id: string) => {
  return fetcher(`/api/invoices/${id}`, { method: 'DELETE' });
};
