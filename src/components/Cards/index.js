import React from "react";
import "./style.css";

function Cards(props) {
    
    return (
        <div className="click-item">
        <img src={props.img} onClick={() => props.handleImageClick(props.id, props.shake)}/>
        </div>
    );
}

export default Cards;