import styled from "styled-components";
import Search from "./Search";
import { GiHotMeal } from "react-icons/gi";

function Header () {
    return(
        <div className="App">
        <Wrapper>
          <Nav>
            <GiHotMeal /> 
              <a href={`/`}><b>Recipe finder</b></a>
          </Nav>
          <Search />
        </Wrapper>
    </div>
    )
}

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    color: var(--gray-600);
    font-size: 2rem;
  }
  a {
    text-decoration: none;
    colour: black;
    padding-top: 5px;
    padding-left: 10px;
    font-size: 35px;
    bold: true;
    }
  a:visited, a:hover, a:focus {
    text-decoration: none;
    color: #000;
}
`;

const Wrapper = styled.div`
  padding: 0rem 0rem 0rem 1rem;
  display: flex;
  justify-content: space-between;
`

export default Header