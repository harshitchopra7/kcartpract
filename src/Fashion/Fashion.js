import React from 'react';
import FashionComponent from './FashionComponent';

function LargeAppliances () {
    return (
        <div>
            <FashionComponent 
                id={1} 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQce3b1n8p9F5fX-42txaAPjEjBPlSTrlnvKg&usqp=CAU"
                name="Nike Zoom" 
                category="Men"
                type="Footwear"
                typeofcategory="Sports Shoes"
                attribute="With Laces"
                sizeissue="Runs true to its size"
                size="7 UK, 9 UK, 10 UK, 11 UK"
                color="Black"
                price="7,000"
            />
            <FashionComponent 
                id={2} 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQRdbbsvov2ZTUMVMWPWf6MD1XzzaSSTrWbw&usqp=CAU"
                name="Adidas Polo" 
                category="Men"
                type="Clothing"
                typeofcategory="Tshirt"
                attribute="Dryfit"
                sizeissue="Runs true to its size"
                size="S, M, L, XL, XXL"
                color="Maroon"
                price="1,500"
            />
            <FashionComponent 
                id={3} 
                image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTOXwTWwtxKwSmsDav2YROznSBF-jXNdCxXQxLy7MfLmqBK5uz5lJi3xOB1hQM9UZvroD7Yf4VF-Y8&usqp=CAc"
                name="Skechers Kn" 
                category="Women"
                type="Footwear"
                typeofcategory="Sports Shoes"
                attribute="With Laces"
                sizeissue="Runs one size larger"
                size="5 UK, 6 UK, 7 UK, 9 UK"
                color="Pink"
                price="5,000"
            />
            <FashionComponent 
                id={4} 
                image="data:image/jpeg;base64,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"
                name="GAP Cap Uni" 
                category="Unisex"
                type="Cap"
                typeofcategory="Baseball Cap"
                attribute="100% Cotton"
                sizeissue="Elastic adjustment"
                size="Free Size"
                color="Navy"
                price="1,200"
            />
            <FashionComponent 
                id={5} 
                image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJfs1WUaW0bv-z2sqBDeyfSEUqB44Sr3LTgmgdph2q_OpE14Mh6fKq2BIsp4zZhWrkRrlBtn1fuws&usqp=CAc"
                name="Adidas Aqua" 
                category="Men"
                type="Footwear"
                typeofcategory="Slides"
                attribute="Rubber sole"
                sizeissue="Runs true to its size"
                size="8 UK, 9 UK, 10 UK, 11 UK"
                color="Red"
                price="3,599"
            />
        </div>
    );
}
export default LargeAppliances;             