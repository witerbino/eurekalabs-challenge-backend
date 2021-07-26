import { Router } from 'express';

import addressRouter from '@/main/routes/addresses';

export default Router()
  .use('/address', addressRouter);