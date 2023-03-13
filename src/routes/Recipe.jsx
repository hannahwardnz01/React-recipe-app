import RecipeCard from "../components/RecipeCard"
import Header from "../components/Header"

function Recipe(id) {
  return (
    <div>
      <Header />
      <RecipeCard id={{id}} />
    </div>
  )
}

export default Recipe;
