const express= require('express')
const app = express()
const router_products=require('./Routers/products')
const router_cart=require('./Routers/cart.js')
const PORT=8080||process.env.PORT
app.use(express.json())
app.use("/api",router_products)
app.use("/api",router_cart)

app.listen(PORT,()=>{
    console.log(`Listenning on port ${PORT}`)
})