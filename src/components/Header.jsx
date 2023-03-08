import styled from "styled-components";
import Search from "./Search";

function Header (){
    return(
        <Wrapper>
            <h1>Recipe finder</h1>
            <Search />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px;
    font-size: 20px;

    h1{
        
    }
`

export default Header;