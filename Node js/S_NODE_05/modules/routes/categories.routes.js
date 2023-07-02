const express = require("express")
const {addCategory,updateCategory,getCategories,getCategory, deleteCategory, categories} =require("../../controller/categories.controller")
const app=express()
app.use(express.json())
const categoryRouter=express.Router()
categoryRouter.get("/category",getCategories)

categoryRouter.get("/category/:id",getCategory)

categoryRouter.post("/category",addCategory)

categoryRouter.put("/category/:id",updateCategory)

categoryRouter.delete("/category/:id",deleteCategory)
module.exports = {
    categoryRouter
  };