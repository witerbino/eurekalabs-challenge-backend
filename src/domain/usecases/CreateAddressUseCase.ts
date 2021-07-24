import { Address } from '@/domain/entities';

export interface CreateAddressUseCase {
  save(address: Address): Promise<void>;
}