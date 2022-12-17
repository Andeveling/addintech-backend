import app from './app';
import config from './config';
/* import { sequelize } from './database'; */

export async function runServer() {
  try {
    app.listen(config.PORT, () => {
      console.log(`server listening on ${config.HOST}:${config.PORT}`);
      console.log('if you like kill server press ctrl + c');
    });
  } catch (error) {
    console.error(error);
  }
}

runServer();

process.on('uncaughtException', (error) => {
  console.error('uncaught exception: ', error);
});
