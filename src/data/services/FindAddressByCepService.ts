import { Address } from '@/domain/entities';
import { CepInvalid, CepNotFound } from '@/domain/errors';
import { FindAddressByCepUseCase } from '@/domain/usecases/FindAddressByCepUseCase';

import { AddressModel } from '@/data/models';
import { CepProvider } from '@/data/interfaces/providers';
import { CreateAddressRepository, FindAddressByCepRepository } from '@/data/interfaces/repositories';

export class FindAddressByCepService implements FindAddressByCepUseCase {
  constructor(
    private cepProvider: CepProvider,
    private addressRepository: CreateAddressRepository & FindAddressByCepRepository
  ) {}

  async load(cep: string): Promise<AddressModel> {
    let address: AddressModel;

    if (cep.length !== 8) throw new CepInvalid(cep);

    address = await this.loadAddressFromDb(cep);
      
    if (!address) {
      address = await this.loadAddressFromApi(cep);

      if (address === null) throw new CepNotFound(cep);
      
      await this.saveAddressInDb(address);
    }
    return address;
  }

  private async saveAddressInDb(address: AddressModel): Promise<void> {
    await this.addressRepository.save(address);
  }

  private async loadAddressFromDb(cep: string): Promise<Address> {
    return await this.addressRepository.load(cep);
  }

  private async loadAddressFromApi(cep: string): Promise<AddressModel> {
    return await this.cepProvider.getAddressByCep(cep);
  }
}