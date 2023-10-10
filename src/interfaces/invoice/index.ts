import { RentalInterface } from 'interfaces/rental';
import { GetQueryInterface } from 'interfaces';

export interface InvoiceInterface {
  id?: string;
  rental_id: string;
  amount_due?: number;
  payment_status: string;
  due_date?: any;
  created_at?: any;
  updated_at?: any;

  rental?: RentalInterface;
  _count?: {};
}

export interface InvoiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  rental_id?: string;
  payment_status?: string;
}
