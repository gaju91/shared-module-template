export interface IDatabaseConfig {
    type: 'postgres' | 'mysql' | 'mariadb' | 'sqlite' | 'oracle' | 'mssql';
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  }
  