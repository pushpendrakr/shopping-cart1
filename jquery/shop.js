function fetchProducts(done){
    $.get('api/products',function(data){
     done(data)
    })}        
function fetchProductscart(done){
    $.get('api/products/carts',function(data){
     done(data)
    })}        
function addProduct(name,manufacturer,price,done){
$.post('api/products',{
    name: name,
    manufacturer: manufacturer,
    price: price},
    function(data){
        done(data)})}
