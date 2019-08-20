const express=require('express' )
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(__dirname))
app.use('/api',require('./api/hello').route)
app.listen(process.env.PORT,()=>{console.log('server started ')})

