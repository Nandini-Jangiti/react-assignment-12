import React from 'react';
import { FaHeart, FaShare, FaShoppingCart } from 'react-icons/fa';
import '../cssfiles/Product.css'

const Product = ({ url, name, description, category, price, rating }) => (
    <div className="product-container">
        <div className="product">
            <div className="product-image">
                <img src={url} alt={name} />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="product-info">
                    <p>Price: {price}</p>
                    <p>
                        Rating:{rating}
                    </p>
                    <p>category:{category}</p>
                </div>

            </div>
            <div className="product-buttons">
                <button><FaHeart /> </button>
                <button><FaShare /> </button>
                <button><FaShoppingCart /> </button>
            </div>
        </div>
    </div>
);

export default Product;
