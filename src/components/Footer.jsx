import styled from "styled-components";
import { COLORS } from "../Colors"
import { ReadAll, Read } from "../firebase_setup/Read";

function Footer () {
    console.log(Read("hannah"))
    return (
        <Wrapper>
            <ListWrapper>
                <p style={{fontWeight: "bold"}}>Popular</p>
                <p style={{fontWeight: "bold"}}>New recipes</p>
                <p style={{fontWeight: "bold"}}>Tags</p>
            </ListWrapper>
            <ListWrapper>
                <p>About</p>
                <p>Privacy policy</p>
                <p>Contact</p>
            </ListWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.TeaGreen};
  margin-top: 20px;
`
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.1;
  padding: 20px;
`

export default Footer;