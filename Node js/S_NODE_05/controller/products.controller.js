const express = require("express")
 const {numberValidation}= require("../regex/regex")
const app=express()
app.use(express.json())
// const priceValidation=/^[0-9]*$/
let products=[]

const addProduct=(req,res)=>{
    //validation

    const {user} = require("../controller/user.controller")
    const {categories}=require("../controller/categories.controller")
    let name =req.body.name
    let price =req.body.price
    let category_id=req.body.category_id
    let priceNumberValidation= numberValidation.test(price)
    let category_idNumberValidation=numberValidation.test(category_id)
     let findCategory=categories.find((Element)=>Element.id==category_id)
    if(!user){
        return res.status(401).json({error:"please login first"})
    }else if (!categories){
        return res.status(401).json({error:"no categories added yet"})
    }else if(name==""||name.length<3){
        return res.status(401).json({error:"plase make enter name and it should be more at lesast 3 characters"})
    }else if(price==""||priceNumberValidation==false){
        return res.status(401).json({error:"price should be a number"})
    }else if (findCategory==undefined||category_idNumberValidation==false){
        return res.status(401).json({error:"category not found"})
    }else{
            //validation end
    // adding product
    if(user){
        if(products.length==0){
            product={
                id:products.length+1,
                name:req.body.name,
                price:req.body.price,
                category_id:req.body.category_id
            }
        }else{
          let id= products.at(-1).id+1
          product={
                id:id,
                name:req.body.name,
                price:req.body.price,
                category_id:req.body.category_id
                }
        }

        products.push(product)
        return res.status(200).json({products})
    }
}
}
const updateProduct=(req,res)=>{
    let name =req.body.name
    let price =req.body.price
    let category_id=req.body.category_id
    let priceNumberValidation= numberValidation.test(price)
    const {user} = require("../controller/user.controller")
    const {categories}=require("../controller/categories.controller")
    let category_idNumberValidation=numberValidation.test(category_id)

     let findCategory=categories.find((Element)=>Element.id==category_id)

    let Id=parseInt(req.params['id'])
    let findProduct=products.find((Element)=>Element.id==category_id)
    if(products.length==0){
        return res.status(401).json({error:"no products yet"})

    }   
    if(findProduct==undefined){
        return res.status(401).json({error:"product not found"})
    }
    if(!user){
        return res.status(401).json({error:"please login first"})
    }else if (!categories){
        return res.status(401).json({error:"no categories added yet"})
    }else if(name==""||name.length<3){
        return res.status(401).json({error:"plase make enter name and it should be more at lesast 3 characters"})
    }else if(price==""||priceNumberValidation==false){
        return res.status(401).json({error:"price should be a number"})
    }else if (findCategory==undefined||category_idNumberValidation==false){
        return res.status(401).json({error:"category not found"})
    }else{
        let requestedCategory=products.map((element)=>{
            if(Id==element.id){
             element.name=name
             element.price=price
             element.category_id=category_id
            }
    })
    if(requestedCategory){
        return res.status(200).json({products})
    }
}
    
}
const getProducts=(req,res)=>{
    const {user} = require("../controller/user.controller")
    const {categories}=require("../controller/categories.controller")

    if(!user){
        return  res.status(404).json({ error: 'please login first' });
    }
    if(categories.length==0){
      return  res.status(404).json({ error: 'no Categories yet' });
    }
    if(products.length==0){
        return  res.status(404).json({ error: 'no products yet' });
    }
    return  res.status(200).json(products);
}
const getProduct=(req,res)=>{
    let id=parseInt(req.params.id)
    const {user} = require("../controller/user.controller")
    const {categories}=require("../controller/categories.controller")

    if(!user){
        return  res.status(404).json({ error: 'please login first' });
    }
    if(categories.length==0){
        return  res.status(404).json({ error: 'no Categories yet' });
      }
      if(products.length==0){
        return  res.status(404).json({ error: 'no products yet' });
    } 
      const product = products.find((pro) => pro.id === id);
      if (!product) {
        return res.status(404).json({ error: 'product not found' });
        
      }else{
        return  res.status(200).json(product);
      }
}
const deleteProduct=(req,res)=>{
    let id=parseInt(req.params.id)
    const {user} = require("../controller/user.controller")
    const {categories}=require("../controller/categories.controller")

    if(!user){
        return  res.status(404).json({ error: 'please login first' });
    }
    if(categories.length==0){
        return  res.status(404).json({ error: 'no Categories yet' });
      }
      const product = products.find((cat) => cat.id === id);
      if (!product) {
        return res.status(404).json({ error: 'product not found' });
        
      }else{
        products.splice(products.findIndex(a => a.id === id) , 1)
        return  res.status(200).json(product);
      }
    
}
module.exports={
    addProduct,
    updateProduct,
    getProducts,
    getProduct,
    deleteProduct
}