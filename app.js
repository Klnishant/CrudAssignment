require('dotenv').config();
const express=require('express');

const connectToDb=require("./config/db.js");
const userRoutes=require('./routes/userRoutes.js');

const app=express();

try {
    app.use(express.json());
    app.use("/",userRoutes);

    connectToDb();

    
    console.log("Connection of routing and db succesfull");
} catch (error) {
    console.log(error);
}

module.exports=app;