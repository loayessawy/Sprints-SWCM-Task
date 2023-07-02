const express = require("express")
const app=express()
app.use(express.json())
let categories=[]
const addCategory = (req,res)=>{
        const {user} = require("../controller/user.controller")
        let categoryName
        if(user){
            if(categories.length==0){
                 categoryName={
                    id:categories.length+1,
                    name:req.body.name
                    }
            }else{
              let id= categories.at(-1).id+1
                 categoryName={
                    id:id,
                    name:req.body.name
                    }
            }
   
            if(categoryName.length<3){
                return res.status(401).json({error:"category name should be at lease 3 characters"})
            }else{
                categories.push(categoryName)
                module.exports={
                categories               
                 }
                return res.status(200).json(categories)
            }
        }else{
            console.log("else")
            return res.status(401).json({error:"please login first"})
        }
    }
const updateCategory=(req,res)=>{
    let categoryName
    let id=parseInt(req.params.id)
    const {user} = require("../controller/user.controller")
    if(user){
       
            categoryName={
            id:id,
            name:req.body.name}
            const category = categories.find((cat) => cat.id === id);
            if (!category) {
              res.status(404).json({ error: 'Category not found' });
              res.end()
            }
    let requestedCategory=categories.map((element)=>{
       if(id==element.id){
        element.name=req.body.name
        res.status(200).json(element );
        module.exports={
            categories
       }
      
    }
    }) 
    }
}
const getCategories=(req,res)=>{
    const {user} = require("../controller/user.controller")
    if(!user){
        return  res.status(404).json({ error: 'please login first' });
    }
    if(categories.length==0){
      return  res.status(404).json({ error: 'no Categories yet' });
    }
    return  res.status(200).json(categories);
}
const getCategory=(req,res)=>{
    let id=parseInt(req.params.id)
    const {user} = require("../controller/user.controller")
    if(!user){
        return  res.status(404).json({ error: 'please login first' });
    }
    if(categories.length==0){
        return  res.status(404).json({ error: 'no Categories yet' });
      }
      const category = categories.find((cat) => cat.id === id);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
        
      }else{
        return  res.status(200).json(category);
      }
    
}
const deleteCategory=(req,res)=>{
    let id=parseInt(req.params.id)
    const {user} = require("../controller/user.controller")
    if(!user){
        return  res.status(404).json({ error: 'please login first' });
    }
    if(categories.length==0){
        return  res.status(404).json({ error: 'no Categories yet' });
      }
      const category = categories.find((cat) => cat.id === id);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
        
      }else{
        categories.splice(categories.findIndex(a => a.id === id) , 1)
        return  res.status(200).json(category);
      }
    
}

module.exports={
    addCategory,
    updateCategory,
    getCategories,
    getCategory,
    deleteCategory
}