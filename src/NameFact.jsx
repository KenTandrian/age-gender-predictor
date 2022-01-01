import React from "react";

const NameFact = ({ nama, umur, jk }) => {
    return (
        (nama === "") ?
        <div></div> :
        <div className="w-80 bg-white br3 pa3 pa4-ns mv2 ba b--black-10 shadow-5">
            <h1 className="f2 f-subheadline-l fw6 mv3">{nama}</h1>
            {
                (jk === null || umur === null) ?
                <p className="f6 fw4">Sorry, data not found.</p> :
                <div>
                    <p className="f6 fw4">You should be {umur} years old.</p>
                    <p className="f6 fw4">You are a {jk}.</p>
                </div>
            }
        </div>
    )
}
export default NameFact;