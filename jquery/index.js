$(function(){
let productlist=$('#product-list')

fetchProducts(function(products){
    productlist.empty()
    for(product of products){
    productlist.append(`<div class="card" style="width: 20rem;">
    <div clas="col-4 card mx-2 p-4">
    <h4 class="product-name">${product.name}</h4>
    <div class="product-manufacturer">${product.manufacturer}</h4>
    <div class="row">
    <div class="col m-3 p-3">
    <b>Rs. ${product.price}</b>
    </div>
    <a href=" "> <button value=${product.id} class="btn btn-primary m-3 remove"> remove</button></a>
    </div>
    </div></div>`)} 
    $('.remove').each(function() {
                $(this).click( function() {
                    console.log("clicked")
                var id=$(this).val()
              $.ajax({
                  url:'/api/products/removeshop',
                  type:"DELETE",
                  data:{id:id},
                  success:function(){
                      window.alert(" deleted")
                  }})})})})})