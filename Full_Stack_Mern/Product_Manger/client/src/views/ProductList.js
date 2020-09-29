import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const ProductList = props => {
    const [products, setproducts]=useState([]);
    const [isDelete, setisDelete] =useState(false);

    useEffect ((id)=>{ 
        setisDelete(false);
        axios
        .get("http://localhost:8000/api/product")
        .then(res =>{
            setproducts(res.data)
        })
    }, [isDelete])


const deleteProject =(id)=>{
    axios
    .delete('http://localhost:8000/api/product/' + id)
    .then(res =>{
        setisDelete(true);
    })
}

    return (
        <div>
            {products.map((product, idx)=>{
                return <p key={idx}>
                    <Link to ={"/singleproduct/" + product._id}>
                        {product.title},{product.price}, {product.description}
                    </Link>
                    
                    <button onClick={(e)=>{deleteProject(product._id)}}>
                        Delete
                    </button>
                    
                    
                    Product Title:{product.title}, Product Price: {product.price} , Product Description: {product.description} </p>
            })}
        </div>
    )
}

export default ProductList;