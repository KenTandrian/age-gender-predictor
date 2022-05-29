import React from "react";

type SearchBarProps = {
    detectEnter: (arg0: React.KeyboardEvent<HTMLInputElement>) => void,
    value: string,
    onChange: (arg0: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ( { detectEnter, value, onChange }: SearchBarProps) => {
    return (
        <div className="pv3">
            <label htmlFor="thenumber" className="b db mb2 f2 f-subheadline-3 pv2">
                Enter your name here!
            </label>
            <small id="name-desc" className="f4 black-80 db mb2 pv3">Only one word (first name).</small>
            <input 
                id="thenumber" 
                type="text" 
                placeholder="Type a name" 
                onKeyUp={detectEnter}
                value={value}
                onChange={onChange}
                className="ba b--black-20 pa3 mb2 w-90 f3"
                min="0" max="1000"
                autoComplete="off"
            />
            <small id="name-desc" className="f4 black-80 db mb2 pv3">Press enter to submit.</small>
        </div>
    );
}
export default SearchBar;