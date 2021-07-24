import { Client } from 'pg';

export class Database {
  private static connection: Client;

  constructor() {}

  public static getConnection(): Client {
    if (!this.connection) {
      this.connection = new Client({
        host: 'localhost',
        port: 5334,
        user: 'docker',
        password: 'docker',
        database: 'docker-postgres',
      });
    }
    return this.connection;
  }
}