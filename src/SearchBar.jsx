import React from "react";

const SearchBar = ( { detectEnter } ) => {
    return (
        <div className="tc pv3">
            <label for="thenumber" class="f6 b db mb2">
                Enter your number here!
            </label>
            <input 
                id="thenumber" 
                type="number" 
                placeholder="Enter a number" 
                onKeyUp={detectEnter}
                className="ba b--black-20 pa2 mb2 w-30"
                min="0" max="1000"
            />
            <small id="name-desc" class="f6 black-60 db mb2">Press enter to submit.</small>
        </div>
    );
}
export default SearchBar;