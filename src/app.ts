import express, { Express } from 'express';
import { FacebookServer } from './setupServer';
import databaseConnection from './setupDatabase';
import { config } from './config';

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: FacebookServer = new FacebookServer(app);
    server.start();
  }
  public loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
