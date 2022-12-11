import './App.css';
import data from "./data"
import Navbar from "./components/Navbar"
import Recipe from "./components/Recipe"

export default function App() {

  const recipes = data.map(item => {
    return (
        <Recipe
            key={item.id}
            item={item}
        />
    )
  }) 

  console.log(recipes)

  return (
    <div>
      <nav><h3>My recipes</h3></nav>     
      <h4 className='header--style'>Favorites</h4> 
      <section className='recipes--favs'>
        {recipes}
      </section>
      <h4 className='header--style'>All recipes</h4> 
      <section className='recipes--all'>
        {recipes}
        {recipes}
      </section>
    </div>
  );
}
