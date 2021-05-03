import "bulma/css/bulma.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";



//Supports up to three button links
function Header(props) {
    console.log("from Header.js");
    return (
        <nav id="header" className="level banner">
            <div className="level-left">
                <div className="level-item">
                    <div id="logo" className="title"> {props.title} </div>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    {props.button1}
                    {props.button2}
                    {props.button3}
                </div>
            </div>
        </nav>
    );
}


export default Header;