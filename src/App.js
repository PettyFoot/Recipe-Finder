
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Recipe from './Recipe';
import Navigation from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail';

import './App.css';


const App = () =>{

  const APP_ID = 'fb127113';
  const APP_KEY = '88facaa166fc9838378c790c5ebcb0cd';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const testURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(()=>{
    getRecipes();
  }, [query])

  //let returnedRecipes = {};

  /**const getSpecifcRecipes = async () =>{

    //This doesnt work because i get a cor issue, and i dont even know what cor is
    for(const recipe of returnedRecipes){
      const idxRecipeCode = recipe.recipe.uri.indexOf("recipe") + 7
      const recipeCode = recipe.recipe.uri.substring(idxRecipeCode)
      //console.log(`https://api.edamam.com/api/recipes/v2/${recipeCode}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`)

      const specificSearchURL = `https://api.edamam.com/api/recipes/v2/8275bb28647abcedef0baaf2dcf34f8b?type=public&app_id=fb127113&app_key=88facaa166fc9838378c790c5ebcb0cd`
     
      const response = await fetch(specificSearchURL);
      const data = await response.json();
      console.log(data.recipe)
    } 
  }*/

  const getRecipes = async () =>{
    const response = await fetch(testURL);
    const data = await response.json();
   // data.hits.reduce(prev, curr, idx) => {console.log(curr)};
    //returnedRecipes = data.hits
    setRecipes(data.hits);
    
   

    data.hits.forEach(element => {
      const idxRecipeCode = element.recipe.uri.indexOf("recipe") + 7
      const recipeCode = element.recipe.uri.substring(idxRecipeCode)
      //console.log(element) 
    })
   // getSpecifcRecipes();
  }

 

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const Home = () =>{
    return(
      <div className='App'>
      <header>
        <Navigation />
        <h1>Recipe for Success</h1>
        <form className='search-form' onSubmit={getSearch}>
          <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
          <button className='search-button' type='submit'>Search</button>
        </form>
      </header>
      <div className="recipe">
        {recipes.map(recipe =>(
            <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
        ))}
        </div>
      </div>);
  }

  return(
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/shop/:id' element={<ItemDetail />} />
        </Routes>
        

      </div>
    </Router>
   

  );

  
}



export default App;



/** */