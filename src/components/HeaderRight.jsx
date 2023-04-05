import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BsFillPlusSquareFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import { useState } from "react";
import { COLORS } from "../Colors"
import { Button } from "@mui/material";

function HeaderRight() {

  const [searchData, setSearchData] = useState("")

  return (
    <SearchAddDiv style={{display: "flex", justifyContent: "left", alignItems: "center", paddingRight: "40px"}}>
      <Button variant="contained">Vegetarian</Button>
      <Button variant="contained">Lunches</Button>
      <Button variant="contained">Dinners</Button>
      <Button variant="contained">Baking</Button>
      <Link to={`add`} >
        <BsFillPlusSquareFill style={{paddingRight: "20px", fontSize: "40px", paddingTop: "4px" }} />
      </Link>
        {searchData === "" && <FaSearch style={{ fontSize: "20px", fill: 'white', position: "absolute", paddingLeft:"750px"}} /> }
        <input type="text" onChange={e => setSearchData(e.target.value)} style={{height: "30px", width: "300px", backgroundColor: COLORS.DarkGreen, border: "none", color: COLORS.TeaGreen}}/>
    </SearchAddDiv>
  );
}

const SearchAddDiv = styled.div`
  Button {
    background-color: ${COLORS.DarkGreen};
    height: 50px;
    box-shadow: none;
    margin-left: 10px;
    margin-right: 10px;
  }
`;



export default HeaderRight;
