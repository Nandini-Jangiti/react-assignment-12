
import React from 'react';
import Product from './Product';


const MainComponent = ({ products }) => {
    return (
        <div className="main">
            {products.map(p => (
                <Product key={p.title} {...p} />
            ))}
          
        </div>
    );
};

export default MainComponent;
