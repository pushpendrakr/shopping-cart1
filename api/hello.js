const route=require('express').Router()
route.use('/users',require('./users'))
route.use('/products',require('./products'))
//route.use('/products/findproduct',require('./products'))
//route.use('/products/addtocart',require('./products'))
//route.use('/products/carts',require('./products'))
exports=module.exports={route}
