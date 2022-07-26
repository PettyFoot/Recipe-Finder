
import React, {useEffect, useState} from 'react';
import Navigation from './Nav';
import ShopItem from './Item';
import './App.css';


function Shop(){

  const [itemimages, setItems] = useState([]);

  useEffect(() =>{
    fetchShopItems();
    
    
  }, [])


  let itemImagesAll = []

  const fetchShopItems = async () =>{
    const data = await fetch("https://fortnite-api.com/v2/shop/br/combined");
    const items = await data.json();
    
    for(const entries of items.data.daily.entries){
      for(const items of entries.items){
        //console.log(items.images.featured)
        if(items.images.featured != null){
          itemImagesAll.push(items.images.featured);
        }
      }
    }
    console.log(itemImagesAll)
    setItems(itemImagesAll);
    //console.log(itemimages);
    
  };

  return(
    <div className='shop-container'>
      <Navigation />
      <h1>Shop</h1>
      <section className='items'>
        {itemimages.map(image =>(
          <ShopItem image={image}/>
        ))}
      </section>
    </div>
  )
}


export default Shop;