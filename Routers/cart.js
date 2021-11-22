const express=require('express')
const {Router}= express
const wrapper=require('../Utilities/wrapper.js')
const {Product,Cart}= require('containers_products_generator');
const { id } = require('containers_products_generator/schemaValidation');
const router= new Router();
const c1= new Cart()
const p1= new Product()

router.get("/cart",wrapper(async(req,res)=>{
    let cart = await c1.showAllItems();
    res.status(200).json({message:'Cart successfully created',data:cart})
}))

router.post("/cart",wrapper(async(req,res)=>{
    let cart = await c1.createCart();
    res.status(200).json({message:'Cart successfully created',data:cart})
}))

router.post("/cart/:idCart/:idProduct",wrapper(async(req,res)=>{
    let {idCart,idProduct}=req.params
    const product=await p1.getById(idProduct)
    let cart = await c1.addItems(idCart,product)
    res.status(200).json({message:'Cart successfully created',data:cart})
}))

router.delete("/cart/:idCart/:idProduct",wrapper(async(req,res)=>{
    let {idCart,idProduct}=req.params
    let cart = await c1.deleteItem(idCart,idProduct)
    res.status(200).json({message:'Cart successfully created',data:cart})
}))

router.delete("/cart",wrapper(async(req,res)=>{
    let cart = await c1.deleteCart();
    res.status(200).json({message:'Cart´s has been deleted',data:cart})
}))

module.exports=router