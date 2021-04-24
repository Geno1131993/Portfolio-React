import React, {Component} from "react";
import "bulma/css/bulma.css";




class Repo extends Component{
    constructor(props){
        super(props);
        this.state = {
            repo: props
        }
    }



    render() {
        console.log(this.state.repo.name);
        return (
            <div className = "repo">
                Name: {this.state.repo.name}
            </div>
        );
    }
}

export default Repo;