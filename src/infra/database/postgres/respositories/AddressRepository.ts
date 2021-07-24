import { AddressModel } from '@/data/models';
import { Database } from '@/infra/database/postgres/Database';
import { CreateAddressRepository, FindAddressByCepRepository } from '@/data/interfaces/repositories';

import { Client } from 'pg';

export class AddressRepository implements CreateAddressRepository, FindAddressByCepRepository {
  private readonly db: Client;

  constructor() {
    this.db = Database.getConnection();
  }

  async load(cep: string): Promise<AddressModel> {
    return await this.db.query(`
      SELECT * FROM addresses WHERE cep = $1
    `, [cep])[0];
  }

  async save(address: AddressModel): Promise<void> {
    await this.db.query(`
      INSERT INTO addresses 
        (cep, bairro, municipio, logradouro)
      VALUES
        ($1, $2, $3, $4)
    `, [
      address.cep,
      address.bairro,
      address.municipio,
      address.logradouro
    ]);
  }
}