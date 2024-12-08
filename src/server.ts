import mongoose from 'mongoose';
import config from './config/index';
import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';
const port: number = Number(config.port);
// uncaught exceptions error handling
process.on('uncaughtException', (err) => {
  errorLogger.error(err);
  process.exit(1);
});
// server connection with mongoose
let server: Server;
async function bootstrap() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2m0rny5.mongodb.net/university-managements-service`
    );
    server = app.listen(port, () => {
      logger.info(`Listening on ${port}`);
    });
  } catch (error) {
    errorLogger.error(error);
  }
  // handle error unhandledRejection
  process.on('unhandledRejection', (error) => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
bootstrap();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
