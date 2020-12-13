const express=require('express' )
const session=require('express-session')
const passport=require('./passport')
const app=express()
app.set("view engine","hbs")

//allows us to access body of post request
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(session({
    secret:'secret'
}))
app.use(passport.initialize())
app.use(passport.session())

//telling express where static files are located
app.use('/',express.static(__dirname))


app.use('/api',require('./api/hello').route)

app.use('/views/sitemanager',(req,res)=>{
    res.render('sitemanager')
})
app.use('/views/signup',(req,res)=>{
    res.render('signup')
})
app.use('/views/add_product.html',(req,res)=>{
    express.static(__dirname+"views/add_product.html")
})
app.get('/auth/facebook', passport.authenticate('facebook',{scope:['email']}));
app.get('/auth/facebook/callback',passport.authenticate('facebook', {   
                                        successRedirect: '/views/client',
                                        failureRedirect: '/' }));
app.listen(process.env.PORT||1234,()=>{console.log('server started ')})

