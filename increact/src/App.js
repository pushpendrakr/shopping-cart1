import React,{Component} from 'react'
import './App.css';
import Product from './Components/products'
import{BrowserRouter} from 'react-router-dom'
class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Product/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
