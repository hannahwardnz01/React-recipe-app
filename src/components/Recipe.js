import React from "react"

export default function Recipe(props){
    return(
        <div className="recipe--card">
            <img src={props.item.imageURL} className="recipe--image"/>
            <div>
                <p>{props.item.title}</p>
            </div>
        </div>
    )
}