import React from "react";
import "./Nav.css";

const Nav = (props) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-text">
                    <a href="/">
                        Clicky-Game
                    </a>
                </div>
                <div className="navbar-text">
                    Click an image to begin
                </div>
                <div className="navbar-text">
                    Score: <span className="score">{props.score}</span> | 
                    Top Score:<span className="topScore">{props.topScore}</span>
                </div>
            </nav>
        </div>
    )
}

export default Nav;