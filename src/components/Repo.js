import React, { Component } from "react";
import "bulma/css/bulma.css";




class Repo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repo: []
        }
    }


    componentDidMount(){
        this.setState({repo: this.props.repo});
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
        return (
            <li key = {this.state.repo.name} className="repo">
                <a href={this.state.repo.html_url} rel="noreferrer" target="_blank">
                    <div className="repo_title">{this.state.repo.name}</div>
                    <div className="repo_info">
                        <p id={this.random()} className="lotus"></p>
                        <p className="repo_description">{this.state.repo.description}</p>
                    </div>
                </a>
            </li>
        );
    }
}



export default Repo;