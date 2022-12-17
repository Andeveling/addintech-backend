import express, { Application } from 'express';
import path from 'path';
import userRoutes from '../routes/user.routes';
import productRoutes from '../routes/product.routes';

export const routes = (server: Application) => {
  server.use('/user', userRoutes);
  server.use('/store', productRoutes);
  // This folder  for this project will be used to store files of products
  server.use('/uploads', express.static(path.join(__dirname, '../../uploads')));
};

export default routes;
