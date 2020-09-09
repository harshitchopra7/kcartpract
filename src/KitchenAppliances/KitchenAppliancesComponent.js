import React from 'react';
import './KitchenAppliancesComponent.css';

function KitchenAppliancesComponent ({ id, image, name, brand, pieces, consumption, voltage, attribute, warranty, price, color }) {
    return (
        <div className="a-row center">
            <div className="aligning">
                <div className="description tc">
                    <h1>{name}</h1>
                    <div className="f4">
                        <p>Brand: {brand}</p>
                    </div>     
                </div>
                <div className="more-description tc center mt4">
                    <p>Pieces: {pieces}</p>
                    <p>{consumption}</p>
                    <p>{voltage}</p>
                </div>
                <div className="center mt3">
                    <img src={image} alt="" width="200px" height="140px"/>
                </div>
                <div className="more-description center tc mt4">
                    <p>{attribute}</p>
                    <p>Warranty: {warranty}</p>
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
export default KitchenAppliancesComponent;   