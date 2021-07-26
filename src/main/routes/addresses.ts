import { Router, Request, Response } from 'express';

import { factoryFindAddressByCepController } from '@/main/factories';

export default Router()
  .get('/:cep', (req: Request, res: Response) => {
    return factoryFindAddressByCepController().handle(req, res);
  });
