const express=require('express')
const {Router}= express
const wrapper=require('../Utilities/wrapper.js')
const Product= require('containers_products_generator');
const { id } = require('containers_products_generator/schemaValidation');
const router= new Router();
const p1= new Product()

router.get("/products",wrapper(async(req,res)=>{
    let product = await p1.getAll()
    res.status(200).json({data:product})
}))
router.delete("/products/:id",async(req,res)=>{
    let {id}=req.body
    let product=await p1.deleteByID(id)
    res.status(200).json({message:"item deleted",data:product})
})
router.put("/update",async(req,res)=>{
    let {id,name,description,price,url}=req.body
    let product=await p1.updateById(id,name,description,price,url)
    res.status(200).json({message:"update completado",data:product})
})
router.post("/products",async(req,res)=>{
    await p1.save(req.body)
    res.status(200).send("Producto guardado exitosamente!!!")
})
module.exports=router