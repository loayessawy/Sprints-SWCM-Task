
const express = require("express")
const app=express()
app.use(express.json())
const userRouter=express.Router()

const { login, register ,registerValidation} = require("../../controller/user.controller")

//  let categories=[]

userRouter.get("/login",login)

userRouter.post("/register",registerValidation)
module.exports = {
        userRouter
  };