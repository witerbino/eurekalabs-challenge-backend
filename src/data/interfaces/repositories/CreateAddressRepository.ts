import { AddressModel } from '@/data/models';

export interface CreateAddressRepository {
  save(address: AddressModel): Promise<void>;
}