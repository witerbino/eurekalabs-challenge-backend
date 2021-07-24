import { AddressModel } from '@/data/models';

export interface FindAddressByCepRepository {
  load(cep: string): Promise<AddressModel>;
}