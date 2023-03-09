import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <FormStyle>
      <div>
        <FaSearch style={{ backgroundColor: "transparent" }} />
        <input type="text" />
      </div>
    </FormStyle>
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
`;

export default Search;
