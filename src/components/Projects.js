import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import RepoTable from "./RepoTable.js";
import axios from "axios";
import "bulma/css/bulma.css";
import "./style/Projects.css";






class Projects extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            repos: this.get_repos()
        }

    }





    get_repos(){
        let repos = [];
        axios
            .get("https://api.github.com/users/Geno1131993/repos")
            .then(function(response){
                for(let i = 0; i < response.data.length; i++){
                    repos.push(response.data[i]);
                }
            });
            console.log(repos);
        return repos;
    }


    
    


    render() {
       
        return (
            <div className="Projects">
                <title>Projects</title>
                <div id = "background"></div>
                <div className="gradient"></div>

                {/* Header */}
                <nav id="header" className="level banner">
                    <div className="level-left">
                        <div className="level-item">
                            <div id="logo" className="title"> Projects </div>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">

                        </div>
                    </div>
                </nav>

                {/* Lotuses */}
                
                <div id = "wrapper">

                    <div id = "lotus-tiles">
                    </div>


                    <div id = "github-repos-container">
                        <RepoTable repos = {this.state.repos}/>
                    </div>

                </div>

                

                {/* Footer */}

                <div id="footer" className="level banner">
                    <div className="level-left">
                        <div className="level-item">
                            
                            <div id="sig" className="title"> 
                                Design by . . .
                    
                            </div>
                            
                            <a id = "sig_icon" rel = "noreferrer" href = {"https://www.linkedin.com/in/danielle-smith-b48b64195"} target = "_blank"></a>
                            
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">

                        </div>

                    </div>


                </div>




            </div>
        );
    }




}

export default Projects;