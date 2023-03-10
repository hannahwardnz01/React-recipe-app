import { useEffect, useState } from "react";
import data from "../data";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

function All() {
  const [all, setAll] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    setAll(data);
  };


  function getGridRecipe(title, imageURL) {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <a href={`/recipe/1`}>
        <Card>
          <p>{title}</p>
          <img src={imageURL} alt={title}/>
          <Gradient />
        </Card>
        </a>
      </Grid>
    );
  }

  


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Wrapper>
        <h2>All recipes</h2>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {all.map((recipe) => {
            return getGridRecipe(recipe.title, recipe.imageURL);
          })}
        </Grid>
      </Wrapper>
    </Box>
  );
}

const Wrapper = styled.div`
  margin: 0.4rem 1rem 0.4rem 1rem;
  justify-content: space-between;
  width: 98%;
`;

const Card = styled.div`
  min-width: 10rem;
  min-height: 15rem;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default All;
