import { Address } from '@/domain/entities';

export interface FindAddressByCepUseCase {
  load(cep: string): Promise<Address>;
}