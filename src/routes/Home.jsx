import FavouriteSlider from "../components/FavouriteSlider";
import All from "../components/All";
import HeaderLeft from "../components/HeaderLeft"
import Footer from "../components/Footer"
import HeaderCenter from "../components/HeaderCenter"
import styled from "styled-components";
import HeaderRight from "../components/HeaderRight";
import { COLORS } from "../Colors"

function Home() {
  return (
    <div>
      <HeaderWrapper>
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </HeaderWrapper>
      <FavouriteSlider />
      <All />
      <Footer />
    </div>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.TeaGreen};
  box-shadow: 0 8px 8px -8px grey;
`

export default Home;