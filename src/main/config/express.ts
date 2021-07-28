import express, { Express, json } from 'express';

import routers from '@/main/routes';
import cors from 'cors';

export class App {
  private app: Express;

  constructor() {
    this.app = express();
  }

  public init(): Express {
    this.setMiddlewares();
    this.setRoutes();
    return this.app;
  }

  private setMiddlewares(): void {
    this.app.use(cors());
    this.app.use(json());
  }

  private setRoutes(): void {
    this.app.use('/api', routers);
  }
}