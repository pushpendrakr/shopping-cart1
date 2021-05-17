const User=require('../db').User
const route=require('express').Router()
const passport=require('../passport')
route.get('/',(req,res)=>{
User.findAll()
.then((users )=>{
    res.status(200).send(users)
})
.catch((err)=>{
    res.status(500).send({err})})})
route.post('/login/', passport.authenticate('local', {  
        failureRedirect: '/views/sitemanager',
        successRedirect: '/../views/agent.html'
    }))
    
route.get('/views/sitemanager',(req,res)=>{
        res.render('sitemanager')
})
    
route.post('/',(req,res)=>{
       User.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname })
      .then((user)=>{res.redirect('/views/sitemanager')})
      .catch((err)=>{
       console.log(err)})})
exports=module.exports=route
