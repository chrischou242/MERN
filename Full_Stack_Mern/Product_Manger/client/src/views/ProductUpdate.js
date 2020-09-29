import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';

const ProductUpdate = props =>{

    const [ title, setTitle]= useState('');
    const [price, setPrice]=useState('');
    const [description, setDescription]=useState('');

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+props.id)
        .then(res=>{
            console.log(res);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
    },[])

    const updateProduct = e => {
        e.preventDefault();
        axios
        .put('http://localhost:8000/api/product/'+props.id,{
            title :title,
            price : price,
            description: description,
        })
        .then(res=>navigate('/singleproduct/'+props.id));

        }


    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default ProductUpdate;