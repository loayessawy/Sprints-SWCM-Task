const express = require("express")
const {addProduct,updateProduct,getProducts,getProduct,deleteProduct} =require("../../controller/products.controller")
const app=express()
app.use(express.json())
const productRouter=express.Router()

productRouter.post("/products",addProduct)
productRouter.put("/products/:id",updateProduct)
productRouter.delete("/products/:id",deleteProduct)
productRouter.get("/products/:id",getProduct)
productRouter.get("/products",getProducts)

module.exports = {
    productRouter
  };