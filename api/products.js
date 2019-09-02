const Product=require('../db').Product
const cart=require('../db').cart
const route=require('express').Router()

route.get('/',(req,res)=>{
Product.findAll()
.then( (products)=>{
    res.status(200).send(products)})
    .catch((err)=>{res.status(500).send({error:"could not display products"} )})} )
route.get('/carts',(req,res)=>{
    cart.findAll()
    .then((products)=>{
        res.status(200).send(products)})
        .catch((err)=>{res.status(500).send({error:"could not display products"} )})
})
route.delete('/removecart',(req,res)=>{
     cart.destroy({
         where:{
             id:req.body.id
         }
     }).then(()=>{res.send()})    
     .catch((err)=>{console.log(err)})
})
route.delete('/removeshop',(req,res)=>{
    Product.destroy({
        where:{
            id:req.body.id
        }
    }).then(()=>{res.send()})    
    .catch((err)=>{console.log(err)})
})
route.get('/findproduct',(req,res)=>{
        Product.findOne({
            where:{
            id:req.query.id  
            }
        } ).then((product)=>{res.send(product)})
        .catch((err)=>{console.log(err)})
    })
route.post('/addtocart',(req,res)=>{
        cart.create({
            id:req.body.id,
            name:req.body.name,
            manufacturer:req.body.manufacturer,
            price:parseFloat(req.body.price )})
            .then((products)=>{res.send(products)})
        .catch((err)=>{console.log(err)})
})    
route.post('/',(req,res)=>{
    if(isNaN(req.body.price)){
        return res.status(403).send({error:"price is not a valid number"})}
    Product.create({
         name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)})
        .then((products)=>{res.status(201).send(products)} )
        .catch((err)=>{ res.status(501).send({error:"could not add product"})})
    })
        exports=module.exports=route
      