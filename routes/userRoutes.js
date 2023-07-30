const express=require('express');

const {home,createUser,getUser}=require('../controllers/usercontroller.js');

const router=express.Router();

try {
    router.get("/",home);
    router.post('/register',createUser);
    router.get('/login',getUser);
    console.log("Routing succesful");
} catch (error) {
    console.log(error);
}

module.exports=router;