import { useEffect, useState } from "react";
import data from "../data";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Favourite() {
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

  return (
    <div>
      <Wrapper>
        <h1>Favourites</h1>
        {favourite.length === 0 ? (
          <h4>Add a recpe to favourites to see it here!</h4>
        ) : (
          <Splide
            options={{
              perPage: 4,
              pagination: false,
              drag: "free",
              gap: "2rem",
            }}
          >
            {favourite.map((recipe) => {
              return (
                <SplideSlide>
                  <Link to={`recipe/${recipe.id}`}>
                    <Card>
                        <p>{recipe.title}</p>
                        <img src={recipe.imageURL} alt={recipe.title} />
                        <Gradient />
                    </Card>
                    </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        )}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 0.4rem 1rem;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    padding-top: 100px;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
  SplideSlide {
    background-color: transparent;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
`;
export default Favourite;