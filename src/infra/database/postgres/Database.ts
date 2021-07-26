import { Client } from 'pg';

export class Database {
  private static connection: Client;

  constructor() {}

  public static getConnection(): Client {
    if (!this.connection) {
      this.connection = new Client({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_BASE,
      });
      this.connection.connect();
    }
    return this.connection;
  }
}