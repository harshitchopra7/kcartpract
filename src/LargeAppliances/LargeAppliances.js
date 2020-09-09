import React from 'react';
import LargeAppliancesComponent from './LargeAppliancesComponent';

function LargeAppliances () {
    return (
        <div>
            <LargeAppliancesComponent
                id={1} 
                image="data:image/jpeg;base64,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"
                name="Samsung AC" 
                capacity="1.5 Ton"
                type="Inverter"
                star={3}
                voltage={230}
                installation="Split"
                weight={10850}
                color="Snow White"
                price="32,780"
            />
            <LargeAppliancesComponent
                id={2} 
                image="data:image/jpeg;base64,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"
                name="Carrier 2Ton" 
                capacity="2 Ton"
                type="Inverter"
                star={4}
                voltage={290}
                installation="Split"
                weight={10980}
                color="Glacier White"
                price="43,510"
            />
            <LargeAppliancesComponent
                id={3} 
                image="data:image/jpeg;base64,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"
                name="LLoyd GXC2" 
                capacity="1 Ton"
                type="Non Inverter"
                star={2}
                voltage={180}
                installation="Split"
                weight={9980}
                color="Pearl White"
                price="27,500"
            />
            <LargeAppliancesComponent
                id={3} 
                image="data:image/jpeg;base64,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"
                name="Whirlpool X" 
                capacity="1 Ton"
                type="Inverter"
                star={5}
                voltage={175}
                installation="Split"
                weight={9835}
                color="White, Purple"
                price="30,100"
            />
            <LargeAppliancesComponent
                id={4} 
                image="data:image/jpeg;base64,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"
                name="Bluestar 3B-" 
                capacity="2 Ton"
                type="Non Inverter"
                star={2}
                voltage={265}
                installation="Split"
                weight={1235}
                color="White, Maroon"
                price="37,500"
            />
        </div>
    );
}
export default LargeAppliances;            