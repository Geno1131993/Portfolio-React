import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import RepoTable from "./RepoTable.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import axios from "axios";
import "bulma/css/bulma.css";
import "./style/Projects.css";





class Projects extends Component {

    constructor(props){
        super(props);
    
    }
    

    render() {
        return (
            <div className="Projects">
                <title>Projects</title>
                <div id = "background"></div>
                <div className="gradient"></div>

                {/* Header */}
                    <Header title = "Projects" button1 = "Home" button2 = "About" button3 = "Contact"></Header>

                {/* Lotuses */}
                
                <div id="wrapper">

                    <div id="lotus-tiles"></div>

                    <div id="github-repos-container">
                        <RepoTable key="repo_table"></RepoTable>
                    </div>

                </div>



                {/* Footer */}

                <Footer></Footer>



            </div>
        );
    }




}

export default Projects;