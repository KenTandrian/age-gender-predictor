import React, { Component } from "react";
import NumFact from './NumFact';
import SearchBar from "./SearchBar";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            thenumber: Math.floor(Math.random()*100),
            thesentence: ""
        };
    }

    // To detect enter in Search Bar
    onKeyUp = (event) => {
        if(event.keyCode === 13){
            this.setState({ thenumber: event.target.value });
            this.componentDidMount();
            event.target.value = "";
        }
    }
    
    componentDidMount = async () => {
        let thelink = `http://numbersapi.com/${this.state.thenumber}?fragment`;
        const resp = await fetch(thelink);
        const data = await resp.text();
        if (data !== "a number for which we're missing a fact (submit one to numbersapi at google mail!)"){
            this.setState({thesentence: "is " + data});
        } else {
            const kalimatbaru = `a number greater than ${parseInt(this.state.thenumber) - 1}`;
            this.setState({thesentence: "is " + kalimatbaru});
        }
        console.log(this.state.thesentence);
    }

    render() {
        return (
            <div>
                <header className="tc pv3 pv4-ns bg-near-white">
                    <h1 className="f5 f4-ns fw6 mid-gray">Age & Gender Predictor</h1>
                    <h2 className="f6 gray fw2 ttu tracked">Made with agify.ioKenrick Tandrian</h2>
                </header>
                <hr></hr>
                <SearchBar detectEnter={this.onKeyUp}/>
                <NumFact angka={this.state.thenumber} kalimat={this.state.thesentence}/>
            </div>
        );
    }
}
export default App;