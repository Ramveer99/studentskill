const express=require('express')
require('./config/Database')
const dotenvpath=require('dotenv').config({path:'./config/.env'})
const app=express()
const User=require('./modelSchema/usermodel')
const Userabout=require('./modelSchema/Aboutmode')
const classModel=require('./modelSchema/classmodel')
const upload=require('./utilpage/multer')
const cors = require('cors');
const jwt=require('jsonwebtoken')
app.use(express.json())
app.use(cors());
const bcrypt=require('bcrypt')
const roundpass=10;

const comparePasswords=require('./utilpage/bcryptpass')
const hashPassword=require('./utilpage/bcryptpass')





app.post("/login",async(req,resp)=>
{
   const {email,password}=req.body
   // const useremail=userdata.email
   
   let user=await User.findOne({email})
   // console.log('user pass', user)

   const passwordMatch = await comparePasswords(password, user.password);
   console.warn(user)
   if(!user || !passwordMatch)
   {
      resp.status(400).json({success:false,message:"invalide email and password"})
   }
   else
   {
     jwt.sign({user},process.env.securetyKey,{expiresIn:'200s'},(err,token)=>
     {
       resp.status(200).json({success:true,message:"Login Successfully",token ,user})
     })
   }
   
})


app.post('/singup',async(req,resp)=>
 {
    const {name,email,password}=req.body
    console.warn(email ,password)
    const hashpass= await  hashPassword(password,roundpass)
    
    let user=await User.findOne({email})
    try{
    if(!user)
    {
         user=User.create({
          name, email,password: hashpass,
       })
       resp.status(200).json({success: true,message:"user Created"})
    }
    else
    {
      return resp.status(401).json({success:false,message:"user Already Exit"})
    }
   } catch(error)
   {
    return resp.status(409).json({
        success: false,
        message: error.message,
      });
   }
 }
)


app.get('/aboutus',async(req,resp)=>
{
   try{
   let modeldata= await Userabout.findOne({})
   resp.status(200).json(modeldata)
   }
   catch(error)
   {
      resp.status(500).json({message: 'Internal Server Error'})
   }
   
})

app.use('/uploads', express.static('uploads'));

app.post('/createclass', upload.single('filename'),async(req,resp)=>
{
   try
   {
   const datareq=req.body
   console.warn(req.file)
   let classml=await classModel.create({
      title:req.body.title,
    aboutclass:req.body.aboutclass,
    filename: process.env.baseUrl + req.file.path
   })
  
   await classml.save()
 
   resp.status(200).json({success:true,classml})
   // console.log(datareq)
}catch(error)
{
   resp.status(400).json(error)
}
})

app.get('/getclass',async(req,resp)=>
{ 
   try
   {
     let classdt= await classModel.find()
     resp.status(200).json({success:true,classdt})
   }
   catch(error)
   {
      resp.status(400).json(error)
   }
})


app.listen(process.env.PORT,()=>
{
    console.warn("server is running mode")
})