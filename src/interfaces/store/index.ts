import { ToolInterface } from 'interfaces/tool';
import { GetQueryInterface } from 'interfaces';

export interface StoreInterface {
  id?: string;
  name: string;
  address: string;
  phone_number?: string;
  email?: string;
  created_at?: any;
  updated_at?: any;
  tool?: ToolInterface[];

  _count?: {
    tool?: number;
  };
}

export interface StoreGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  phone_number?: string;
  email?: string;
}
