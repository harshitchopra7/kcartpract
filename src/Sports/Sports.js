import React from 'react';
import SportsComponent from './SportsComponent';

function Sports () {
    return (
        <div>
            <SportsComponent
                id={1} 
                image="data:image/jpeg;base64,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"
                name="Dumbbell" 
                category="Fitness"
                weight="5 kg"
                pieces="1 piece"
                type="Rubber"
                delivery="No"
                attribute="Iron casting"
                color="Black"
                price="1,280"
            />
            <SportsComponent
                id={2} 
                image="data:image/jpeg;base64,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"
                name="Football" 
                category="Sports"
                weight="440 g"
                pieces="1 piece"
                type="Rubber"
                delivery="No"
                attribute="Size - 5"
                color="Neon"
                price="2,100"
            />
            <SportsComponent
                id={3} 
                image="data:image/png;base64,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"
                name="Bench" 
                category="Fitness"
                weight="12 kg"
                pieces="1 piece"
                type="Gym Bench"
                delivery="300 extra"
                attribute="8 in 1"
                color="Black"
                price="11,500"
            />
            <SportsComponent
                id={4} 
                image="data:image/jpeg;base64,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"
                name="Puma Bat" 
                category="Sports"
                weight="900 g"
                pieces="1 piece"
                type="Willow"
                delivery="No"
                attribute="Free Size"
                color="Green"
                price="8,000"
            />
            <SportsComponent
                id={5} 
                image="data:image/jpeg;base64,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"
                name="Basketball" 
                category="Sports"
                weight="440 g"
                pieces="1 piece"
                type="Rubber"
                delivery="No"
                attribute="Size - 7"
                color="Brown"
                price="1,950"
            />
        </div>
    );
}
export default Sports;