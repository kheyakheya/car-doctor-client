import React, { useEffect, useState } from 'react';
import product1 from '../../../assets/images/products/1.png'
import product2 from '../../../assets/images/products/2.png'
import product3 from '../../../assets/images/products/3.png'
import product4 from '../../../assets/images/products/4.png'
import product5 from '../../../assets/images/products/5.png'
import product6 from '../../../assets/images/products/6.png'
import ProductCard from './ProductCard';



const Products = () => {
    const [products,setProducts]= useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className="my-16">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-500">Popular Products</h3>
                <h2 className="text-5xl">Browse Our Products</h2>
                <p>There are many variations of text Available, But The MAjority HAve randomized <br /> stuff Alteration in Some Form slightly in variation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {products.map(product=><ProductCard 
             key={product._id}
             product={product}
             ></ProductCard>)}   
            </div>
            <div className="text-center my-4">
                <button className="btn btn-outline btn-warning">More Products</button>
            </div>

        </div>
    );
};

export default Products;