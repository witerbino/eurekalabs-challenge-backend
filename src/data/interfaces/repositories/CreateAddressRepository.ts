import { AddressModel } from '@/data/models';

export interface CreateAddress {
  save(address: AddressModel): Promise<AddressModel>;
}