import { Button } from "@mui/material";
import { COLORS } from "../Colors";
import styled from "styled-components";

function HeaderCenter(){
    return(
        <Wrapper>
            <Button>Vegetarian</Button>
            <Button>Lunches</Button>
            <Button>Dinners</Button>
            <Button>Baking</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    Button {
        background: ${COLORS.DarkGreen};
        color: ${COLORS.TeaGreen};
        margin-left: 10px;
        margin-top: 5px;
        margin-right: 10px;
        box-shadow: none;
        padding-left: 15px;
        padding-right: 15px;
        disableRipple: true;
    }
    Button:hover{
        background: ${COLORS.UraniunBlue};
        color: ${COLORS.DarkGreen};
        box-shadow: none;
    }
`

export default HeaderCenter;