import styled from "styled-components";
import InfoIcon from "./InfoIcon";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

function RecipeCard(recipeGiven){

    const recipe = recipeGiven.id.recipe

    function getRating(){
        if(recipe.rating === "1"){
            return <Rating> <AiFillStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/></Rating>
        }
        else if(recipe.rating === "2"){
            return <Rating> <AiFillStar/> <AiFillStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/></Rating>
        }
        else if(recipe.rating === "3"){
            return <Rating> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiOutlineStar/> <AiOutlineStar/></Rating>
        }
        else if(recipe.rating === "4"){
            return <Rating> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiOutlineStar/> </Rating>
        }
        else if(recipe.rating === "5"){
            return <Rating> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </Rating>
        }

    }

    return(
        <Card>
            <Wrapper>
                <TitleWrapper>
                    <h1>{recipe.title}</h1>
                    {getRating()}
                </TitleWrapper> 
                <InfoWrapper>
                    <InfoIcon iconInfo={recipe.time} iconType="Time"/>
                    <InfoIcon iconInfo={recipe.difficulty} iconType="Difficuly"/>
                    <InfoIcon iconInfo={recipe.servings} iconType="Servings"/>
                </InfoWrapper>
            </Wrapper>
            <CardWrapper>
                <Image>
                    <img src={recipe.imageURL} alt={recipe.title} />
                </Image>
                <InfoPanel>
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe.ingredients.map((item) => {
                            return <li>{item}</li>
                        })}
                    </ul>
                </InfoPanel>
                <InfoPanel>
                    <h2>Method</h2>
                    <ol>
                        {recipe.method.map((item) => {
                            return <li>{item}</li>
                        })}
                    </ol>
                </InfoPanel>
            </CardWrapper>
        </Card>
    ) 
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    `

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 30px;
`

const InfoPanel = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 20px;
`
const Image = styled.div`

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
  justify-content: flex-start;
`

const TitleWrapper = styled.div`
    display: flex;
`

const Rating = styled.div`
  padding-left: 20px;
  padding-top: 18px;
  font-size: 20px;
`

export default RecipeCard;