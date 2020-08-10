import React from "react"

function Meme(props) {
    return (
        <div className = "meme">
            <img src = {props.image}/>
            <h2 className = "top">{props.topText}</h2>
            <h2 className = "bottom">{props.bottomText}</h2>
        </div>
    )
}

export default Meme