import { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../data";
import InfoIcon from "./InfoIcon";


function RecipeCard({id}){

    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        getRecipe();
      }, []);

    const getRecipe = async => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === 3) {
                setRecipe(data[i]);
                break;
            }
        }
    }

    return(
        <Card>
            <LeftCard>
                <Wrapper>
                    <h1>{recipe.title}</h1>
                    <InfoWrapper>
                        <InfoIcon iconInfo={recipe.time} iconType="Time"/>
                        <InfoIcon iconInfo={recipe.difficulty} iconType="Difficuly"/>
                        <InfoIcon iconInfo={recipe.servings} iconType="Servings"/>
                    </InfoWrapper>
                </Wrapper>
                <img src={recipe.imageURL} alt={recipe.title} />
            </LeftCard>
            <MiddleCard>
                <h2>Ingredients</h2>
            </MiddleCard>
            <RightCard>
                <h2>Method</h2>
            </RightCard>
        </Card>
    ) 
}

const Card = styled.div`
    display: flex;
    flex-direction: row;`
const RightCard = styled.div`
    padding-top: 150px;
    width: 30%
`
const MiddleCard = styled.div`
    padding-top: 150px;
    width: 30%  
`


const LeftCard = styled.div`
    width: 30%  
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

  img {
    border-radius: 0.5rem;
    position: relative;
    width: 400px;
    height: 400px;
    object-fit: cover;
    margin: 20px;
  }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 10px;
    margin: 15px;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default RecipeCard;