import './App.css';
import data from "./data"
import Navbar from "./components/Navbar"
import Recipe from "./components/Recipe"
import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


export default function App() {

  const recipes = data.map(item => {
    return (
        <Recipe
            key={item.id}
            item={item}
        />
    )
  }) 

  const favs = data.map(item => {
      return (
        <Recipe
            key={item.id}
            item={item}
        />
      )
  })

  console.log(favs)
  
  return (
    <div>
      <Navbar />
      <h4 className='header--style'>Favorites</h4> 
      <ScrollMenu>
        {favs}
      </ScrollMenu>
      <h4 className='header--style'>All recipes</h4> 
      <div className='recipes--all'>
        {recipes}
      </div>
    </div>
  );
}
