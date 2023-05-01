import { GiHotMeal } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { COLORS } from "../Colors"

function HeaderLeft () {
    return(
            <NavLink key="3" to={`/`} style={{display: "flex", flexDirection: "row",
              justifyContent: "flex-start", backgroundColor: COLORS.TeaGreen, textDecorationLine: "none", paddingLeft: "40px"}}>
                <GiHotMeal style={{color: COLORS.DarkGreen, fontSize: "3rem", paddingRight: "10px", paddingTop: "20px"}}/>
                <p style={{fontSize: "2rem", lineHeight: "1"}}>My recipe journal</p>
            </NavLink>
    )
}

export default HeaderLeft