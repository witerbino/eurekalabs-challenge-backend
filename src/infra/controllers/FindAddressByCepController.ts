import { FindAddressByCepService } from '@/data/services';
import { Controller, HttpRequest, HttpResponse } from '@/infra/controllers';

export class FindAddressByCepController implements Controller {
  constructor(
    private readonly findAddressByCepService: FindAddressByCepService
  ) {}

  async handle(req?: HttpRequest, res?: HttpResponse) {
    try {
      const { cep } = req.params;
      const address = await this.findAddressByCepService.load(cep);

      return res.json({
        data: address
      });
    } catch (error) {
      return res.json({
        data: error.message,
      });
    }
  }
}