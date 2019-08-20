const express=require('express' )
const app=express()
const SERVER_PORT=process.env.PORT||2678
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(__dirname))
app.use('/api',require('./api/hello').route)
app.listen(SERVER_PORT,()=>{console.log('server started ')})

