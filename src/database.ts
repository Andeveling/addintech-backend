import mongoose from 'mongoose';
import config from './config';

mongoose.set('strictQuery', true);

export const startDB = async () => {
  try {
    const db = await mongoose.connect(config.MONGO_DB_URI, {});

    console.log(`database is connect to: ${db.connection.name}`);
  } catch (error) {
    console.error(error);
  }
};
