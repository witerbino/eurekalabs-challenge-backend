import { AddressModel } from '@/data/models';

export interface CepProvider {
  getAddressByCep(cep: string): Promise<AddressModel>;
}