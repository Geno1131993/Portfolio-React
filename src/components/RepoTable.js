import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Repo from "./Repo.js"
import "bulma/css/bulma.css";



class RepoTable extends Component{
    //Array of repos gets passed in to Repo
    constructor(props){
        super(props);
        this.state = {
            repos: props.repos
        }
    }



    random(){
        let key = Math.floor((Math.random() * 5) + 1);
        switch(key){
            case 1:
                return "lotus1";
            case 2: 
                return "lotus2";
            case 3:
                return "lotus3";
            case 4:
                return "lotus4";
            case 5:
                return "lotus5";
        }
        return -1;
    }




    render() {
        const list_repos = this.state.repos.map( repo =>
            <li key = {repo.name} className="repo">
                <a href = {repo.html_url} rel = "noreferrer" target = "_blank">
                <div className = "repo_title">{repo.name}</div>
                <div className = "repo_info">
                    <p id = {this.random()} className = "icon"></p>
                    <p className = "repo_description">{repo.description}</p>

                </div>
                </a>

            </li>
        );

        return (
            <div> Repos
            <ul>{list_repos}</ul>
            </div>
        );
    }

}


export default RepoTable;