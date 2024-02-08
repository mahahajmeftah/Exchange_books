import express, { response } from "express";
import mongoose from "mongoose";
import { PORT,mongDBURL } from "./config.js";
import {User} from './models/user.model.js';

const app = express(); 
app.listen(PORT,()=>{
    console.log(`app listening on port:${PORT}`);
});

app.get('/users',async(request,response)=>{
    const users = await User.find();
   response.json(users)
  

})
mongoose.Promise = global.Promise
mongoose.connect(mongDBURL)
console.log(`connected to database : ${mongDBURL}`)
mongoose.connection.on('error', () => {
 throw new Error(`unable to connect to database: ${mongDBURL}`)
})
