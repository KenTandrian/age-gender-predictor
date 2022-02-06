import React, { useContext } from 'react';
import HistoryContext from '../../context/history/history.context';
import HistoryBox from '../history-box/history-box.component';

const History = () => {
    const history = useContext(HistoryContext);

    //console.log(historiNama);
    return (
        <div className='pv3 pv4-ns pa4'>
            <h1 className='b db mb2 f2 f-subheadline-3 pv2 tc'>Your Name Search History</h1>
            {
                (history.length === 0) ?
                <p className='f4 black-80 db mb2 pv2 tc'>No history.</p> :
                <div className="flex flex-wrap">
                {
                    
                    history.map((item, i) => {
                        return(
                            <HistoryBox key={i} namaNya={item.name} umurNya={item.age} jkNya={item.gender} />
                        );
                    })
                }
                </div>
            }
        </div>
    )
}

export default History;