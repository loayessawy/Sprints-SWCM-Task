const express = require("express")
const dotenv =require("dotenv").config()
const {userRouter,user,users}= require("./modules/routes/users.routes")
const {categoryRouter}= require("./modules/routes/categories.routes")
const {productRouter}=require("./modules/routes/Products.routes")
const app=express()

let PORT=process.env.PORT
app.use(express.json())

app.use(userRouter)
app.use(categoryRouter)
app.use(productRouter)

app.listen(process.env.PORT,()=>{
    console.log("server is running")
})