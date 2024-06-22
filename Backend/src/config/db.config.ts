type Database = {
  host: string;
  port: number;
  user: string;
  password: string;
  db: string;
  dialect: 'mysql' | 'postgres' | 'sqlite';
  pool: {
    max: number;
    min: number;
    idle: number;
    acquire: number;
  };
};

export const dbConfig: Database = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  db: 'ecomdb',
  dialect: 'mysql',

  pool: {
    max: 10,
    min: 5,
    idle: 10000,
    acquire: 10000,
  },
};
