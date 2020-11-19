import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,//variable needed to be changed
            posi: 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderChoice.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.arrowKeyHandler = this.arrowKeyHandler.bind(this)
    };

    //call back function
    buttonClickHandler() {
        this.setState({renderBall: true})
    }
    renderChoice() {
        if (this.state.renderBall) { return <div className="ball" style={this.state.ballPosition}></div> }
        else return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
    }

    arrowKeyHandler(event) {
        if (event.key === "ArrowRight" && event.keyCode === 39) {
            let bp = parseInt(this.state.ballPosition.left) + 5 + "px";
            this.setState({ballPosition: {left: bp}})
        }
    }

    //bind ArrowRight keydown event
    componentDidMount() {
        window.addEventListener('keydown', this.arrowKeyHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.arrowKeyHandler);
    }

    render() {
        return (
            <div className="playground">
                {this.renderChoice()}
            </div>
        )
    }
}


export default App;
