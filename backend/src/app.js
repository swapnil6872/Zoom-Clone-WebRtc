import express from "express";
import {createServer} from "node:http"

import { connectToSocket } from "./controllers/socketManager.js";

import mongoose from "mongoose";

import cors from "cors";




const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit:"40kb" , extended:true}));

const start = async ()=>{
    const connectionDb = await mongoose.connect('mongodb+srv://Zoom-Clone-webRtc:Zoom-Clone-webRtc2004@cluster0.owr9wor.mongodb.net/')
    console.log(`MONG Connected Db Host :${connectionDb.connection.host} `)
    server.listen(app.get('port'),()=>{
        console.log("listeing on port 8000")
    })
}

start();