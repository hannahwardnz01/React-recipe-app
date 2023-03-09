import { useEffect, useState } from "react";
import data from "../data";

function Recipe(id) {
  
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        setRecipe(data[i]);
        break;
      }
    }
  }

  return (
    <div>
      <p>{recipe.title}</p>
      <p>{recipe.difficulty}</p>
      <p>{recipe.time}</p>
      <p>{recipe.servings}</p>
      <img src={recipe.imageURL} alt={recipe.title} />
    </div>
  )

}

export default Recipe;
