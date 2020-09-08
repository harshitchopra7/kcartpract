import React from 'react';
import './FashionComponent.css';

function FashionComponent ({ id, image, name, category, type, typeofcategory, attribute, sizeissue, size, price, color }) {
    return (
        <div className="a-row center">
            <div className="aligning">
                <div className="description tc">
                    <h1>{name}</h1>
                    <div className="f4">
                        <p>Category: {category}</p>
                    </div>     
                </div>
                <div className="more-description tc center mt4">
                    <p>Type: {type}</p>
                    <p>{typeofcategory}</p>
                    <p>{attribute}</p>
                </div>
                <div className="center mt3">
                    <img src={image} alt="" width="200px" height="140px"/>
                </div>
                <div className="more-description center tc mt4">
                    <p>{sizeissue}</p>
                    <p>Size: {size}</p>
                    <p>Color: {color}</p>
                </div>
                <div className="price center tc b ml4 mt4">
                    <p className="f3">₹{price}</p>
                    <button className="grow">Add to cart</button>
                </div>
            </div>    
        </div>
    );
}
export default FashionComponent;   