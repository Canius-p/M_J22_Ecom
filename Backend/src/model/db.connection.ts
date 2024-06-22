import { Sequelize, DataTypes } from 'sequelize';
import { dbConfig } from '../config/db.config';

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    idle: dbConfig.pool.idle,
    acquire: dbConfig.pool.acquire,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const db: any = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync({ force: false }).then(() => {
  console.log('Database has been synced successfully.');
});
export default db;
