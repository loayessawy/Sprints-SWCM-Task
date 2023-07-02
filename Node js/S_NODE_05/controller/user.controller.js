const express = require("express")
const app=express()
app.use(express.json())
const jwt =require("jsonwebtoken")
const {passwordValidation,emailValidation} = require("../regex/regex")
let users=[]
let user
const login =(req,res)=>{
    if(req.body.email==""||req.body.password==""){
        console.log("please make sure that you entered email and password")
    }
     user=  users.find((element)=>(req.body.email==element.email&&req.body.password==element.password))
        if(!user){
            return res.status(401).json({status:error,message:"falied"})
        }else{
            const token=  jwt.sign(user,process.env.JWT_SECRET)
            module.exports = {user};
            return res.status(200).json({...user,token})  
        }
}
const register =(req,res,next)=>{
if(users.length==0){
    console.log("less than 0")
    user=req.body
   delete user.passwordConfirmation
   users.push(user)
   res.write("success")
   res.end()
}else{
    let x=  users.find((element)=>{
           if(req.body.email!=element.email&&req.body.password!=element.password){
                user=req.body
               delete user.passwordConfirmation
               users.push(user)
               res.write("success")
               res.end()
           }else{
               console.log("Email or password is already used")
               res.write("falied")
               res.end()
           }
       })
}
}
const registerValidation =(req,res,next)=>{
    //validation using regex.js file
    let email=req.body.email
   let password=req.body.password
    let passwordConfirmation=req.body.passwordConfirmation

    if(!email||!password||!passwordConfirmation){
       console.log("please enter valid data")
    }else if (password!=passwordConfirmation){
        console.log("password doesn't match")
    }else if (!passwordValidation.test(password)){
        console.log("password should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
    }else if (!emailValidation.test(email)){
        console.log("please enter valid email")
    }else{
        register(req,res)
    }
}

module.exports={
    registerValidation,
    register,
    login
}