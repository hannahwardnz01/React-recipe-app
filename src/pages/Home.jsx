import Favorite from "../components/Favorite";
import All from "../components/All";
import styled from "styled-components";

function Home(){
    return (
        
        <Wrapper >
            <Favorite />
            <All />
        </Wrapper>
    );
}

const Wrapper = styled.div`
  margin: 0.4rem 1rem;`

export default Home;