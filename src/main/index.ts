import 'dotenv/config';
import 'module-alias/register';

import { App } from '@/main/config/express';

const app = new App();

app.init().listen(process.env.APP_PORT, () => {
  console.log('App start in port 3000');
});


