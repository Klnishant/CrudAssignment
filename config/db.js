const mongoose=require('mongoose');

const connectToDb=async()=>{
    mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017')
    .then((conn)=>{
        console.log(`Connected to DB: ${conn.connection.host}`);
    })
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    })
}

module.exports=connectToDb;