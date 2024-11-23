import mongoose from 'mongoose';
import config from './config/index';
import dotenv from 'dotenv';
dotenv.config();
import app from './app';
const port: number = Number(config.port);
async function bootstrap() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2m0rny5.mongodb.net/university-managements-service`
    );
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
