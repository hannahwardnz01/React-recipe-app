import { useEffect, useState } from "react";
import data from "../data";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Favorite() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    getFavorite();
  }, []);

  const getFavorite = async () => {
    const favs = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].favorite === true) {
        favs.push(data[i]);
      }
    }
    setFavorite(favs);
  };

  return (
    <div>
      <Wrapper>
        <h2>Favorites</h2>
        {favorite.length === 0 ? (
          <h4>Add a recpe to favorites to see it here!</h4>
        ) : (
          <Splide
            options={{
              perPage: 4,
              pagination: false,
              drag: "free",
              gap: "2rem",
            }}
          >
            {favorite.map((recipe) => {
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
  SplideSlide {
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
export default Favorite;