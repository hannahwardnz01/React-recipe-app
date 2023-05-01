import RecipeCard from "../components/RecipeCard"
import ExploreCard from "../components/ExploreCard"
import HeaderLeft from "../components/HeaderLeft"
import { useLoaderData } from "react-router-dom";
import getRecipe from "../recipe";
import styled from "styled-components";
import Footer from "../components/Footer"

export async function loader({ params }) {
  const recipe = await getRecipe(params.id);
  return { recipe };
}

function Recipe() {
  const { recipe } = useLoaderData();
  return (
    <div>
      <div style={{boxShadow: "0 8px 8px -8px grey"}}>
        <HeaderLeft />
      </div>
      <Wrapper>
        <RecipeCard id={{recipe}} />
        <ExploreCard />
      </Wrapper>
      <Footer />
    </div>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding-left: 100px;
  padding-right: 100px;
`


export default Recipe;
