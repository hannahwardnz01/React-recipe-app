import { useEffect, useState } from "react";
import data from "../data";

function RecipeCard({id}){

    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        getRecipe();
      }, []);

    const getRecipe = async => {
        console.log("getRecipe()")
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === 3) {
                setRecipe(data[i]);
                break;
            }
        }
    }

    return(
        <div>
            <p>{recipe.title}</p>
            <p>{recipe.difficulty}</p>
            <p>{recipe.time}</p>
            <p>{recipe.servings}</p>
            <img src={recipe.imageURL} alt={recipe.title} />
        </div>
    ) 
}

export default RecipeCard;