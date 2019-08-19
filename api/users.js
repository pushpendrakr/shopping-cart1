const User=require('../db').User
const route=require('express').Router()

route.get('/',(req,res)=>{
User.findAll()
.then((users )=>{
    res.status(200).send(users)
})
.catch((err)=>{
    res.status(500).send({error:"could not access users"})
})
} )
route.post('/',(req,res)=>{
       User.create({name: req.body.name})
      .then((user)=>{res.status(201).send(user)})
      .catch((err)=>{
       console.log(err)
      })
})
exports=module.exports=route
