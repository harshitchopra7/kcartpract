import React from 'react';
import './LargeAppliancesComponent.css';

function LargeAppliancesComponent ({ id, image, name, capacity, type, star, voltage, installation, weight, price, color }) {
    return (
        <div className="a-row center">
            <div className="aligning">
                <div className="description tc">
                    <h1>{name}</h1>
                    <div className="f4">
                        <p>Capacity {capacity}</p>
                    </div>     
                </div>
                <div className="more-description tc center mt4">
                    <p>Type: {type}</p>
                    <p>Efficiency: {star} Star</p>
                    <p>Voltage= {voltage} Volts</p>
                </div>
                <div className="center mt3">
                    <img src={image} alt="" width="200px"/>
                </div>
                <div className="more-description center tc mt4">
                    <p>Installation Type: {installation}</p>
                    <p>Weight: {weight} grams</p>
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
export default LargeAppliancesComponent;      

