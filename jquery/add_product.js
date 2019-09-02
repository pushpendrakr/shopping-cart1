$(function(){
let productname =$('#productName')
let productManufacturer=$('#productManufacturer')
let productprice=$('#productPrice')

$('#btnProductAdd').click(function(){
addProduct(productname.val(),productManufacturer.val(),productprice.val(),
    function(addedproduct){
        window.alert("Added "+ addedproduct.name+" to shop")
    })
})

})