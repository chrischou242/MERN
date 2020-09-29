import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router'


    const SingleProduct = props =>{
        
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/product/" + props.id)
        .then(res => {
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }, [])
    return (
        <div>
            <p>Product Title: {product.title}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
            <Link to={"/product/" + product._id+ "/edit"}>
            Edit
        </Link>
        </div>
        
    )
}


export default SingleProduct;