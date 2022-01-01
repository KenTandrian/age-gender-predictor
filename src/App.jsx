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
            theGender: "",
            //theHistory: []
        };
    }

    historiNama = [];

    // For Search Bar
    onlyAllowChar(e) {
        this.setState({ inputTxt: e.target.value.replace(/[^a-zA-Z ]/ig, "")});
    }

    // To detect enter in Search Bar
    onKeyUp = (event) => {
        if(event.keyCode === 13 && event.target.value !== ""){
            const nama = event.target.value;
            //console.log("nama", nama);
            // Because setState is async
            this.setState({ theName: nama }, () => {
                //console.log("thename", this.state.theName);
                this.componentDidMount();
                event.target.value = "";
            });       
        }
    }
    
    componentDidMount = async () => {
        if (this.state.theName !== ""){
            let theAgeLink = `https://api.agify.io?name=${this.state.theName}`;
            let theGenderLink = `https://api.genderize.io?name=${this.state.theName}`;

            const resp1 = await fetch(theAgeLink);
            const ageData = await resp1.json();
            this.setState({theAge: ageData.age});
            //console.log('AgeData', ageData, this.state.theAge);

            const resp2 = await fetch(theGenderLink);
            const genderData = await resp2.json();
            this.setState({theGender: genderData.gender});
            //console.log('GenderData', genderData, this.state.theGender);

            this.historiNama.push({namaNya: this.state.theName, umurNya: ageData.age, jkNya: genderData.gender});
            //console.log(this.historiNama);
        }
    }

    render() {
        return (
            <div>
                <div className="top-container">
                    <header className="tc pv3 pv4-ns top-left">
                        <h1 className="header-title">Age & Gender Predictor</h1>
                        <h2 className="header-subtitle">Type a name!</h2>
                    </header>
                    <div className="top-right">
                        <SearchBar detectEnter={this.onKeyUp} value={this.state.inputTxt} onChange={this.onlyAllowChar.bind(this)}/>
                        <NameFact nama={this.state.theName} umur={this.state.theAge} jk={this.state.theGender}/>
                    </div>
                </div>
                <div>
                    <History historiNama={this.historiNama}/>
                    <footer className="code tc pa3">
                         Made by <a className="footer-link" href="https://github.com/KenTandrian">
                            Ken Tandrian
                        </a> with <a className="footer-link" href="https://agify.io/">
                            agify.io 
                        </a> and <a className="footer-link" href="https://genderize.io/">
                            genderize.io
                        </a>.
                    </footer>
                </div>
            </div>
        );
    }
}
export default App;