import dotenv from 'dotenv';
dotenv.config();

const config = {
  // server configs
  PORT: process.env.PORT || 3001,
  HOST: process.env.HOST || 'http://localhost',

  // db config
  MONGO_DB_HOST: process.env.MONGO_DB_HOST ?? 'localhost',
  MONGO_DB_NAME: process.env.MONGO_DB_NAME ?? 'addintech-db',
  MONGO_DB_USER: process.env.MONGO_DB_USER ?? 'admin',
  MONGO_DB_PASSWORD: process.env.MONGO_DB_PASSWORD ?? 'password',
  MONGO_DB_URI: process.env.MONGO_DB_URI ?? `mongodb://localhost/addintech-db`,
  // JWT
  JWT_TOKEN: process.env.JWT_TOKEN ?? 'secret'
};

export default config;
