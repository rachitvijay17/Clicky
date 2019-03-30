import React from "react";
import "./style.css";

function Container(props) {
    return (
        <main className="Container">
        {props.result.map(image =>(
            
            <div className="click-item">
            <img src={image.image} onClick={() => props.handleImageClick(image.id, image.shake)}/>
            </div>
        ))}
            
        </main>
    );
}

export default Container;