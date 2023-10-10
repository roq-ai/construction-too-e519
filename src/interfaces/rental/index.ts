import { InvoiceInterface } from 'interfaces/invoice';
import { UserInterface } from 'interfaces/user';
import { ToolInterface } from 'interfaces/tool';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  user_id: string;
  tool_id: string;
  rental_start_date: any;
  rental_end_date?: any;
  total_price?: number;
  created_at?: any;
  updated_at?: any;
  invoice?: InvoiceInterface[];
  user?: UserInterface;
  tool?: ToolInterface;
  _count?: {
    invoice?: number;
  };
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  tool_id?: string;
}
