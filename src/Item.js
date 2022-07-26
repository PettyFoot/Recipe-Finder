import React from "react";
import {Link} from 'react-router-dom';
import './App.css';

function ShopItem({image}) {
    return(
        <div className="item-container">
            <Link to={`/shop/${image}`}>
            <img src={image} alt="" />
            </Link>
        </div>
        
    )
}

export default ShopItem;