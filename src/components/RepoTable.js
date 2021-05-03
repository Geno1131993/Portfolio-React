import React, {Component} from "react";
// import { NavLink } from "react-router-dom";
import axios from "axios";
import Repo from "./Repo.js"






class RepoTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: []
        }
    }

    

    componentDidMount(){
        this.get_repos();
    }


    get_repos = async () => {
        axios
          .get("https://api.github.com/users/Geno1131993/repos")
          .then( (response) =>{
              this.setState({repos: response.data});
          });
      
      };


    render() {


        // console.log(this.state.repos);
        const repo_list = this.state.repos.map( (repo) => {
           return (<Repo key = {repo.name} repo = {repo}></Repo>);
        });

        return (
            <ul key="repo_table">
                {repo_list}
            </ul>
        );
    }
}





export default RepoTable;