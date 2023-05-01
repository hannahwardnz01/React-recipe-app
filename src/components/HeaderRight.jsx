import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai"
import { Link } from "react-router-dom";
import { useState } from "react";
import { COLORS } from "../Colors"

function HeaderRight() {

  const [searchData, setSearchData] = useState("")

  return (
    <SearchAddDiv style={{}}>
      <Link to={`add`}> 
        <AiOutlinePlus style={{fontSize: "40px", paddingRight: "10px"}} />
      </Link>
        <input type="text" placeholder="search for a recipe..." onChange={e => setSearchData(e.target.value)}/>
    </SearchAddDiv>
  );
}

const SearchAddDiv = styled.div`
  display: flex;
  align-items: center; 
  justify-content: end;
  padding-right: 40px; 
  padding-top: 5px;
  width: 400px;
  minWidth: 300px
  Link {
    height: 35px;
    width: 35px;
    margin-right: 300px;
  }
  input{
    background-color: ${COLORS.DarkGreen};
    height: 20px;
    width: 300px;
    border: 0px;
    border-radius: 4px;
  }
  input:focus{
    color: ${COLORS.UraniunBlue};
    outline: none;
    border-radius: 4px;
    }
`;



export default HeaderRight;
