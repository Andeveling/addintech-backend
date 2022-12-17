import mongoose from 'mongoose';
import config from './config';

mongoose.set('strictQuery', true);

export const startDB = async () => {
  try {
    const db = await mongoose.connect(`mongodb://${config.MONGO_DB_HOST}/${config.MONGO_DB_NAME}`, {});

    console.log(`database is connect to: ${db.connection.name}`);
  } catch (error) {
    console.error(error);
  }
};
