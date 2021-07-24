export class CepNotFound extends Error {
  constructor(cep: string) {
    super(`CEP: ${cep} not found!`);
  }
}