import Favourite from "../components/Favourite";
import All from "../components/All";
import HeaderLeft from "../components/HeaderLeft"
import styled from "styled-components";
import HeaderRight from "../components/HeaderRight";
import { COLORS } from "../Colors"

function Home() {
  return (
    <div>
      <HeaderWrapper>
        <HeaderLeft />
        <HeaderRight />
      </HeaderWrapper>
      <Favourite />
      <All />
    </div>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.TeaGreen};
`

export default Home;