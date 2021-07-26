import { AddressModel } from '@/data/models';
import { CepProvider } from '@/data/interfaces/providers';

import axios, { AxiosInstance } from 'axios';

export class ViaCepProvider implements CepProvider {
  private readonly BASE_URL = 'https://viacep.com.br/ws/';
  private readonly http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: this.BASE_URL
    });
  }

  async getAddressByCep(cep: string): Promise<AddressModel | null> {
    const { data, status } = await this.http.get(`${cep}/json`);
    return data.erro !== true && status !== 400
      ? this.toMapper(data) 
      : null;
  }

  private toMapper(data: any): AddressModel {
    return {
      cep: data.cep,
      bairro: data.bairro,
      municipio: data.localidade,
      logradouro: data.logradouro,
    } as AddressModel;
  }
}