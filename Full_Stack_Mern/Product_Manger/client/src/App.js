
import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import ProductList from './views/ProductList';
import ProductDetail from './views/ProductDetail';
import ProductUpdate from './views/ProductUpdate';
import ProductForm from './views/ProductForm';


function App() {
  return (
    <div className="App">
      <Router>
        <ProductForm path="/"/>
        <ProductList path="/allproducts"/>
        <ProductDetail path="/singleproduct/:id"/>
        <ProductUpdate path="/product/:id/edit"/>
      </Router>
      
    </div>
  );
}

export default App;
