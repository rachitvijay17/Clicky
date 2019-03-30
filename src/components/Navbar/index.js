import React from "react"

function Navbar(props) {
    return(
        <nav class="navbar">
            <ul>
                <li class="brand">
                    <a href="/">Clicky Game</a>
                </li>
                <li class="">{props.msg}</li>
                <li>Score: {props.score} | Top Score: {props.topscore}</li>
            </ul>
        </nav>
    );
}

export default Navbar;