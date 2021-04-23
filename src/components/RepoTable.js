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


    render() {
        return (
            <div>
                {this.state.repos.map( repo => (
                    <Repo repo = {repo} />

                ))}
            </div>
        );
    }

}


export default RepoTable;