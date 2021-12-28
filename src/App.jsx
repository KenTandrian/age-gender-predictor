import React, { Component } from "react";
import NameFact from './NameFact';
import SearchBar from "./SearchBar";
import History from './History';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            theName: "",
            theAge: "",
            theGender: ""
        };
    }

    // To detect enter in Search Bar
    onKeyUp = (event) => {
        if(event.keyCode === 13){
            this.setState({ theName: "" });
            this.setState({ theName: event.target.value });
            this.componentDidMount();
            event.target.value = "";
        }
    }
    
    componentDidMount = async () => {
        if (this.state.theName !== ""){
            let theAgeLink = `https://api.agify.io?name=${this.state.theName}`;
        let theGenderLink = `https://api.genderize.io?name=${this.state.theName}`;

        const resp1 = await fetch(theAgeLink);
        const ageData = await resp1.json();
        this.setState({theAge: ageData.age});
        console.log(ageData, this.state.theAge);

        const resp2 = await fetch(theGenderLink);
        const genderData = await resp2.json();
        this.setState({theGender: genderData.gender});
        console.log(genderData, this.state.theGender);
        }
    }
/*
    shouldComponentUpdate = async () => {
        let theAgeLink = `https://api.agify.io?name=${this.state.theName}`;
        let theGenderLink = `https://api.genderize.io?name=${this.state.theName}`;

        const resp1 = await fetch(theAgeLink);
        const ageData = await resp1.json();
        this.setState({theAge: ageData.age});
        console.log(ageData, this.state.theAge);

        const resp2 = await fetch(theGenderLink);
        const genderData = await resp2.json();
        this.setState({theGender: genderData.gender});
        console.log(genderData, this.state.theGender);
    }
*/
    render() {
        return (
            <div>
                <div className="top-container">
                    <header className="tc pv3 pv4-ns top-left">
                        <h1 className="header-title">Age & Gender Predictor</h1>
                        <h2 className="header-subtitle">Type a name!</h2>
                    </header>
                    <body className="top-right">
                        <SearchBar detectEnter={this.onKeyUp}/>
                        <NameFact nama={this.state.theName} umur={this.state.theAge} jk={this.state.theGender}/>
                    </body>
                </div>
                <div>
                    <History />
                    <footer className="code tc pa3">
                        ====== Made by <a className="footer-link" href="https://github.com/KenTandrian">
                            Ken Tandrian
                        </a> with <a className="footer-link" href="https://agify.io/">
                            agify.io 
                        </a> and <a className="footer-link" href="https://genderize.io/">
                            genderize.io
                        </a>. ======
                    </footer>
                </div>
            </div>
        );
    }
}
export default App;