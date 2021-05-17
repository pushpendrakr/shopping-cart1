import React,{Component} from 'react'
import axios from 'axios'
import ProductItem1 from './productitem1'
class Carts extends Component{
   
    state={
      
        carts:[]
    }
    componentDidMount(){
       
        axios.get('/api/products/carts')
        .then(res=>{
            this.setState({carts:res.data})
         
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
  deleteHandler=(id1)=>{
    
    axios.delete('/api/products/removecart',
      {data: { id: id1 }})
    .then(()=>{
      const todo1=this.state.carts.filter(t=>t.id!==id1)
      this.setState({
        carts:todo1
      })
    }) 
  }
   render(){
   
    let carts1=this.state.carts.map(val=>{
        return(
            <ProductItem1 key={val.id}{...val} Removing={()=>this.deleteHandler(val.id)}/>
        )
    })

       return(
              <div>{carts1}</div> 
       )
   
    }
    

}

export default Carts