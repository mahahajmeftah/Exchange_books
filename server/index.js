import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from 'compression';
import helmet from 'helmet';
import { PORT,mongDBURL } from "./config.js";
//import {User} from './models/user.model.js';
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
// mount routes

const app = express(); 
app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
app.use(cors({credentials:true,origin:'http://localhost:3000'}))

app.use('/', userRoutes)
app.use('/', authRoutes)


app.listen(PORT,()=>{
    console.log(`app listening on port:${PORT}`);
});


mongoose.Promise = global.Promise
mongoose.connect(mongDBURL)
console.log(`connected to database : ${mongDBURL}`)
mongoose.connection.on('error', () => {
 throw new Error(`unable to connect to database: ${mongDBURL}`)
})
