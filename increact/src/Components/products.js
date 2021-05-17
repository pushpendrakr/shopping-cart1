import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import Post from './post.js'
import Carts from './cart.js'

class Product extends Component{


    render(){
        
       
        return(
            <div>
                 <h1>Products</h1> 
                 <nav>
                 <ul>
                     <li> <a href="/">HOME</a> </li>
                     <li> <a href="/carts">CARTS</a></li>
                 </ul>
                 </nav>
             
             <Route path="/" exact component={Post}/>
               <Route path="/carts"  exact component= {Carts}  />
             
            
            </div>
        )
    }

}
export default Product