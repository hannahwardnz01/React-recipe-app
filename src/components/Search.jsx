import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BsFillPlusSquareFill } from "react-icons/bs"
import { Link } from "react-router-dom";


function Search() {
  return (
    <Icons className="here">
      <Link to={`add`}>
        <BsFillPlusSquareFill style={{ paddingTop: "16px" }} />
      </Link>
      <FormStyle>
        <div>
          <FaSearch style={{ backgroundColor: "transparent", fontSize: "20px" }} />
          <input type="text" />
        </div>
      </FormStyle>
    </Icons>
  );
}

const FormStyle = styled.form`
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 15px;
  margin-top: 50px
  padding-top: 0px;
  background-color: transparent;

  div {
    position: relative;
    width: 400px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-colour: transparent;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 0.5rem;

    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`

const Icons = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  color: #494949;
  font-size: 60px;
  a:visited { 
    text-decoration: none; 
    color: #494949; 
   }
`;

export default Search;
