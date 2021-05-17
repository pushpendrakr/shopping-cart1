import React from 'react'
import './product.css'

const ProductItem=(props)=>(
<div className="product">
    <h1>{props.name}</h1>
   <p>RS {props.price}</p>
   <button onClick={()=>props.AddCart(props.id)}>ADD To Cart</button>
</div>
)

export default ProductItem