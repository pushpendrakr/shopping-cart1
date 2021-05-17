import React,{Component} from 'react'
import axios from 'axios'
import ProductItem from './productitem'

class Posts extends Component{
   
    state={
        products:[],
      
    }
    componentDidMount(){
        axios.get('/api/products')
        .then(res=>{
          this.setState({products:res.data})
          console.log(this.state.products)
        })
      
    }
  
    submitHandler=(val1)=>{
        
        axios.post('/api/products/addtocart',
        
            {     id:val1.id,
                  name:val1.name,
                  manufacturer:val1.manufacturer,
                  price:val1.price
                   
            }
        )
        .then(()=>console.log("completed"))
          
    }
  
   render(){
    let prod=this.state.products.map(val=>{
        return(
            <ProductItem key={val.id} {...val} AddCart={()=>this.submitHandler(val)}/>
        )
    })
  

       return(<div>{prod}</div>)
   
    }
    

}

export default Posts