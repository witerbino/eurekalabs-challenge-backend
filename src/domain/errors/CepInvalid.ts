export class CepInvalid extends Error {
  constructor(cep: string) {
    super(`CEP: ${cep} is invalid!`);
  }
}