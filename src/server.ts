import mongoose from "mongoose";
require('dotenv').config()
import app from './app'
const port:number = 5000
async function boostrap() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2m0rny5.mongodb.net/university-managements-service`)
        app.listen(port, () => {
            console.log(`Listening on ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}
boostrap()