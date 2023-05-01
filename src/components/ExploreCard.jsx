import { useEffect, useState } from "react";
import data from "../data";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../Colors"
import { getRating } from "./RecipeCard"

function ExploreCard() {

  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    getFavourite();
  }, []);

  const getFavourite = async () => {
    const favs = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].favourite === true) {
        favs.push(data[i]);
      }
    }
    setFavourite(favs);
  };

  function getRecipeItem(recipe){
   return( 
      <SingleRecipe>
          <Link to={`../recipe/${recipe.id}`}>
          <img src={recipe.imageURL} alt={recipe.title}/>
        <RecipeInfo>
          <p style={{textDecorationLine: "none"}}>{recipe.title}</p>
          <Rating>
            {getRating(recipe)}
          </Rating>
        </RecipeInfo>
        </Link>
      </SingleRecipe>
      

    )
  }

  return (
      <Wrapper>
        <h2>You might also like...</h2>
        {favourite.map((recipe) => {
            return getRecipeItem(recipe);
          })}
      </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLORS.UraniunBlue};
  margin-left: 200px;
  min-width: 200px;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Rating = styled.div`
  font-size: 20px;
  padding-right: 20px;
`

const SingleRecipe = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  background: white;
  margin-bottom: 10px;
  flex-wrap: wrap;
  min-width: 250px;
  a:link{
    text-decoration: none;
    display: flex
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`

const RecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  line-height: 0;
`

export default ExploreCard;
