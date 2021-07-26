import { FindAddressByCepService } from '@/data/services';
import { FindAddressByCepController } from '@/infra/controllers';
import { AddressRepository } from '@/infra/database';
import { ViaCepProvider } from '@/infra/providers';

export const factoryFindAddressByCepController = (): FindAddressByCepController => {
  const repository = new AddressRepository();
  const provider = new ViaCepProvider();
  const service = new FindAddressByCepService(provider, repository);
  const controller = new FindAddressByCepController(service);

  return controller;
}