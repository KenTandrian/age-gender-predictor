import React from "react";

const HistoryBox = ( { namaNya, umurNya, jkNya } ) => {
    return (
        <div className='mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 mh3 w-25'>
            <h3 className='f3 mb2 mv2'>{namaNya}</h3>
            <div className='flex justify-between'>
                <p className='f5 fw4 gray mv2'>Age: </p>
                <p className='f5 fw4 black mv2'>{umurNya}</p>
            </div>
            <div className='flex justify-between'>
                <p className='f5 fw4 gray mv2'>Gender: </p>
                <p className='f5 fw4 black mv2'>{jkNya}</p>
            </div>             
        </div>
    );
}
export default HistoryBox;