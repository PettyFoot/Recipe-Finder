
import React, {useEffect, useState} from 'react';
import Navigation from './Nav';
import ShopItem from './Item';

import './App.css';


function ItemDetail(){

  const [itemDetails, setItemsDetails] = useState([]);

  useEffect(() =>{
    fetchItem();
  }, [])


  let itemImagesAll = []

  const fetchItem = async () =>{
    
  };

  return(
    <div className=''>
      <Navigation />
      <h1>title</h1>
    </div>
  )
}


export default ItemDetail;