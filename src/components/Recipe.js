import React from "react"
import yellowStar from '../images/yellow-star.png'
import whiteStar from '../images/white-star.png'

export default function Recipe(props){

    const [recipe, setRecipe] = React.useState({...props})
    let img = recipe.favorite ? yellowStar : whiteStar

    function toggleFavorite() {
        setRecipe(prevRecipe => ({
            ...prevRecipe,
            favorite: !prevRecipe.favorite
        }))
    }


    return(
        <div className="recipe--card">
            <img src={img} className="star" onClick={toggleFavorite}/>
            <img src={recipe.item.imageURL} className="recipe--image"/>
            <div>
                <p>{recipe.item.title}</p>
            </div>
        </div>
    )
}


//src/images/white-star.png
//src/components/Recipe.js