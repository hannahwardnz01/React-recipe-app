import { GiHourglass, GiBowlOfRice } from "react-icons/gi";
import { TbChefHat } from "react-icons/tb";
import styled from "styled-components";

function getIcon(iconType){
    switch(iconType){
        case "Difficuly": return(<TbChefHat size="25px"/>)
        case "Time": return(<GiHourglass size="25px"/>)
        case "Servings": return(<GiBowlOfRice size="25px"/>)
        default: return("")
    }
}

function InfoIcon ({iconInfo, iconType}){ 

    return(
        <Widget>
            <Icon>
                <h3>{getIcon(iconType)}</h3>
            </Icon>
            <WidgetText>
                <h4>{iconType}:&nbsp;</h4>
                <h4>{iconInfo}</h4>
            </WidgetText>
        </Widget>
    )
}

const Widget = styled.div`
    display: flex;
    flex-direction: row;
    color: black;
    border-radius: 0.5rem;
    padding-right: 15px;
`

const Icon = styled.div`
    padding-right: 5px;
`

const WidgetText = styled.div`
    display: flex;
    padding-top: 5px;
`

export default InfoIcon;