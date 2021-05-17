import React from 'react'
import './product.css'

const ProductItem1=(props)=>(
<div className="product">
    <h1>{props.name}</h1>
   <p>RS {props.price}</p>
   <button onClick={()=>props.Removing(props.id)}>Remove</button>
</div>
)

export default ProductItem1