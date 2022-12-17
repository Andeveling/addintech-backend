import express, { Application } from 'express';
import path from 'path';

export const routes = (server: Application) => {
  /*   server.use('/user', userRoutes);
  server.use('/api', jobsRoutes); */
  server.use('/files', express.static(path.join(__dirname, '../files')));
};

export default routes;
