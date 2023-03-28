import Favourite from "../components/Favourite";
import All from "../components/All";
import Header from "../components/Header"
import styled from "styled-components";
import Search from "../components/Search";

function Home() {
  return (
    <div>
      <HeaderWrapper>
        <Header />
        <Search />
      </HeaderWrapper>
      <Favourite />
      <All />
    </div>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0rem 0rem 0rem 1rem;
  display: flex;
  justify-content: space-between;
`

export default Home;