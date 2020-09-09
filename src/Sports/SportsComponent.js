import React from 'react';
import './SportsComponent.css';

function SportsComponent ({ id, image, name, category, weight, pieces, type, delivery, attribute, price, color }) {
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
                    <p>Weight: {weight}</p>
                    <p>Pieces: {pieces}</p>
                    <p>Type: {type}</p>
                </div>
                <div className="center mt3">
                    <img src={image} alt="" width="200px" height="140px"/>
                </div>
                <div className="more-description center tc mt4">
                    <p>Delivery charges: {delivery}</p>
                    <p>{attribute}</p>
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
export default SportsComponent;   