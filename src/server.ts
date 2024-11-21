import mongoose from "mongoose";
import config from "./config/index";
require('dotenv').config()
import app from './app'
const port:number = Number(config.port)
async function bootsrap() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2m0rny5.mongodb.net/university-managements-service`)
        app.listen(port, () => {
            console.log(`Listening on ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}
bootsrap()