import React from "react";

const NumFact = ({ angka, kalimat }) => {
    return (
        <div className="mw5 center bg-white br3 pa3 pa4-ns mv2 ba b--black-10 shadow-5">
            <h1 className="tc f2 f-subheadline-l fw6 mv3">{angka}</h1>
            <p className="tc f6 fw4">{kalimat}</p>
        </div>
    )
}
export default NumFact;