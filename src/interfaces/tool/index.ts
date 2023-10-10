import { RentalInterface } from 'interfaces/rental';
import { StoreInterface } from 'interfaces/store';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  description?: string;
  store_id: string;
  price_per_day?: number;
  available?: boolean;
  created_at?: any;
  updated_at?: any;
  rental?: RentalInterface[];
  store?: StoreInterface;
  _count?: {
    rental?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  store_id?: string;
}
