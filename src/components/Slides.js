import React, { Component } from "react";


class Slides extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbs: [],
            current_slide: 0,
            previous_slide: 0,
            next_slide: 0,
            interval: 0,
            images: []
        };
    }



    componentDidMount() {
        this.setState({
            images: this.props.images,
            previous_slide: 0,
            current_slide: 1,
            next_slide: 2,
            thumbs: this.props.images,
            interval: this.props.interval
        });
    }




    next = async () => {
        if (this.state.current_slide === this.state.images.length - 1) {
            await this.setState(current_state => {
                return {
                    current_slide: 0,
                    next_slide: 1,
                    previous_slide: current_state.images.length - 1
                }
            });
        }
        else if (this.state.next_slide === this.state.images.length - 1) {
            await this.setState(current_state => {
                return {
                    current_slide: current_state.images.length - 1,
                    previous_slide: current_state.images.length - 2,
                    next_slide: 0
                }
            });
        }
        else if (this.state.previous_slide === this.state.images.length - 1) {
            await this.setState(current_state => {
                return {
                    current_slide: current_state.current_slide + 1,
                    next_slide: current_state.next_slide + 1,
                    previous_slide: 0
                }
            });
        }
        else {
            await this.setState(current_state => {
                return {
                    current_slide: current_state.current_slide + 1,
                    next_slide: current_state.next_slide + 1,
                    previous_slide: current_state.previous_slide + 1
                }
            });
        }
    }



    previous = async () => {
        if (this.state.current_slide === 0) {
            await this.setState(current_state => {
                return {
                    current_slide: current_state.images.length - 1,
                    previous_slide: current_state.previous_slide - 1,
                    next_slide: 0
                }
            });
        }
        else if (this.state.next_slide === 0) {
            await this.setState(current_state => {
                return {
                    current_slide: current_state.images.length - 2,
                    previous_slide: current_state.images.length - 3,
                    next_slide: current_state.images.length - 1
                }
            });
        }
        else if (this.state.previous_slide === 0) {
            await this.setState(current_state => {
                return {
                    current_slide: 0,
                    next_slide: 1,
                    previous_slide: current_state.images.length - 1
                }
            });
        }
        else {
            await this.setState(current_state => {
                return {
                    current_slide: current_state.current_slide - 1,
                    previous_slide: current_state.previous_slide - 1,
                    next_slide: current_state.next_slide - 1
                }
            });
        }
    }



    render() {
        

        return (
            <div className="slides">
                <p className = "headline">Adventure is out there</p>

                <div id="controller">
                    <span className = "controller_button" onClick={this.previous} > Previous </span>

                    <span className = "controller_button" onClick={() => this.next()} > Next </span>
                </div>

                <div id="slides_container">
                    <div id="previous" className="slide">
                        <div className="thumbnail" style={{ backgroundImage: `url(${this.state.images[this.state.previous_slide]})` }}>

                        </div>
                    </div>
                    <div id="current" className="slide">
                        <div className="thumbnail" style={{ backgroundImage: `url(${this.state.images[this.state.current_slide]})` }}>
                        </div>
                    </div>
                    <div id="next" className="slide">
                        <div className="thumbnail" style={{ backgroundImage: `url(${this.state.images[this.state.next_slide]})` }}>
                        </div>

                    </div>
                </div>





            </div>
        );
    }


}


export default Slides;