import Pages from "./pages/Pages";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from "styled-components";
import Search from "./components/Search";
import { GiHotMeal } from "react-icons/gi";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header>
          <Nav>
            <GiHotMeal /> 
              <Logo to="/">
                <h3>Recipe finder</h3>
              </Logo>
          </Nav>
          <Search />
        </Header>
        <Pages />
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-family: "Consolas", sans-serif;
  padding-left: 1rem;
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    color: var(--gray-600);
    font-size: 2rem;
  }
`;

const Header = styled.div`
  padding: 0rem 0rem 0rem 1rem;
  display: flex;
  justify-content: space-between;
`

export default App;
