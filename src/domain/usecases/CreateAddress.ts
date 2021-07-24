import { Address } from '@/domain/entities';

export interface CreateAddress {
  save(address: Address): Promise<void>;
}