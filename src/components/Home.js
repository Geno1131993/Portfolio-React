//Home page
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import "./style/Home.css";
import { Level, Tile } from "react-bulma-components";
import "bulma/css/bulma.css";


function Home(){
    return(
        <div className = "Home">
            <title>Welcome!</title>
            <body>
                {/* Header */}
                <nav id = "header" className = "level">
                    <div className = "level-left">
                        <div className = "level-item">
                            <div id = "logo"> Welcome! </div>
                        </div>
                    </div>
                    <div className = "level-right">
                        <div className = "level-item">
                            <NavLink to = "/about">
                                <button id = "about" type = "button"> About </button>
                            </NavLink>
                        </div>
                    </div>
                </nav>

            </body>
            
        </div>
    );
}



export default Home;