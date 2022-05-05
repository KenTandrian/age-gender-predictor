import React, { useEffect, useState } from "react";
import NameFact from '../components/name-fact/name-fact.component';
import SearchBar from "../components/search-bar/search-bar.component";
import History from '../components/history-section/history.component';
import HistoryContext from "../context/history/history.context";

import './App.css';

const App = () => {
    const [ theName, setName ] = useState('');
    const [ theAge, setAge ] = useState(null);
    const [ theGender, setGender ] = useState(null);
    const [ history, setHistory ] = useState([]);
    const [ inputTxt, setInput ] = useState('');
    const [ isLoading, setLoading ] = useState(false);

    // For Search Bar
    const onlyAllowCharAndMakeProperCase = (e) => {
        setInput(
            e.target.value.replace(/[^a-zA-Z]/ig, "")
            .replace(/\w\S*/g, (txt) => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()})
        );
    }

    // To detect enter in Search Bar
    const onKeyUp = (event) => {
        if(event.keyCode === 13 && event.target.value !== ""){
            const nama = event.target.value;
            // console.log("nama", nama);
            setLoading(true);
            setName(nama);
            setInput("");
            setAge(null);
            setGender(null);    
        }
    }
    
    useEffect(() => {
        // Declare the data fetching function
        const fetchData = async () => {
            if (theName !== ""){
                let theAgeLink = `https://api.agify.io?name=${theName}`;
                let theGenderLink = `https://api.genderize.io?name=${theName}`;
    
                const resp1 = await fetch(theAgeLink);
                const ageData = await resp1.json();
                setAge(ageData.age);
                console.log('AgeData', ageData, theAge);
    
                const resp2 = await fetch(theGenderLink);
                const genderData = await resp2.json();
                setGender(genderData.gender);
                console.log('GenderData', genderData, theGender);
            }
        }
        // Call the function
        fetchData()
            .catch(err => console.log(err))
            .then(() => {
                if(theName !== ''){
                // Solve component not re-rendering using slice()
                const currentHistory = history.slice();
                const newHistory = {
                    name: theName, 
                    age: theAge, 
                    gender: theGender
                }
                if (theAge != null && theGender != null) currentHistory.push(newHistory);
                setHistory(currentHistory);

                console.log('New History', newHistory);
                setLoading(false);
                console.log("Modified History", history);
            }
            });
    // eslint-disable-next-line
    }, [theName, theAge, theGender]);

    return (
        <div>
            <div className="top-container">
                <header className="tc pv3 pv4-ns top-left">
                    <h1 className="header-title f-headline-l f1-ns">Age & Gender Predictor</h1>
                    <h2 className="header-subtitle">Type a name!</h2>
                </header>
                <div className="top-right">
                    <SearchBar 
                        detectEnter={onKeyUp} 
                        value={inputTxt} 
                        onChange={onlyAllowCharAndMakeProperCase.bind(this)}
                    />
                    {
                        <NameFact nama={theName} umur={theAge} jk={theGender} isLoading={isLoading}/>
                    }
                    
                </div>
            </div>
            
            <div>
                <HistoryContext.Provider value={history}>
                    <History />
                </HistoryContext.Provider>
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
export default App;