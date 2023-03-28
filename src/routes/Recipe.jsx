import RecipeCard from "../components/RecipeCard"
import Header from "../components/Header"
import { useLoaderData } from "react-router-dom";
import getRecipe from "../recipe";
import styled from "styled-components";

export async function loader({ params }) {
  const recipe = await getRecipe(params.id);
  return { recipe };
}

function Recipe() {
  const { recipe } = useLoaderData();
  return (
    <div>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <RecipeCard id={{recipe}} />
    </div>
  )
}

const HeaderWrapper = styled.div`
  padding: 0rem 0rem 0rem 1rem;
  display: flex;
  justify-content: space-between;
`

export default Recipe;
