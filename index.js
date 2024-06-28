import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import CollectionRoute from "./routes/collect.route.js"
import cors from 'cors'


const PORT= process.env.PORT || 4001;

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/Collection",CollectionRoute);

try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongodb");
} catch (error) {
    
}




app.listen(PORT,()=>{
    console.log("Listening on PORT " + PORT);
})