import { Address } from '@/domain/entities';

export interface FindAddressByCep {
  load(cep: string): Promise<Address>;
}