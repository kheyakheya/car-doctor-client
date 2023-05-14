import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const ProductCard = ({product}) => {
    const {title, img, price, rating}=product;
    return (
        <div  className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <Rating style={{ maxWidth: 100 }} value={Math.round(rating)} readOnly />

                        <h2 className="card-title">{title}</h2>
                        <p className="text-orange-500 text-xl">$ {price}</p>
                        <div className="card-actions">
                            <button className="btn btn-warning">Buy Now</button>
                        </div>
                    </div>
                </div>
    );
};

export default ProductCard;