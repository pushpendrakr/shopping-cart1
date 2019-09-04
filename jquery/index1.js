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
        <button value=${product.id} class="col btn btn-primary m-3 cart-btn"> AddToCart</button>
        
        </div>
        </div></div>`)} 
        $('.cart-btn').each(function() {
            $(this).click( function() {
            var id=$(this).val()
            $.get(
                '/api/products/findproduct',
                {id:id},
                function(product){
                $.post(
                    '/api/products/addtocart',
                    {
                        id:product.id,
                       name:product.name,
                       manufacturer:product.manufacturer,
                       price:product.price
                    },
                    function(products){
                        window.alert(products.name+" added to cart")})
                })})} )} ) } )
        