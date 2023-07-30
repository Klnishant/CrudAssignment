const User=require('../models/userModel.js');

const home=(req,res)=>{
    res.send("Hello, World");
}

const createUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;

        if(!(name) || !(email) || !(password)){
            res.status(400).json({
                succes:false,
                message:"Name,email,Password are required",
            });
        }

        const existUser=User.findOne(email);

        if(existUser){
            res.status(400).json({
                succes:false,
                message:"User already exist",
            });
        }

        const user=await User.create({
            name,
            email,
            password,
        });

        res.status(200).json({
            succes:true,
            message:"User created succesfully",
            user
        });

    }
    catch (error) {
        res.status(400).json({
            succes:false,
            message:error.message,
        });
    }
}

const getUser=async(req,res)=>{
    const {email,password} = req.body;

    try {
        const userData= await UserModel.findOne({email});
        if(userData){
            // checking password provided by user is correct or not
            if(userData.password == password){
                res.status(200).send({msg:"User Login Successfully, Enjoy!"})
            }else{
                res.status(401).send({msg:"You have Entered Wrong Password"})
            }
        }else{
            res.status(404).send({msg:"No Account Find associated to this email"})
        }
        
    } catch (error) {
        res.status(501).send({msg:error.message})   
    }
}

module.exports={home,createUser,getUser}