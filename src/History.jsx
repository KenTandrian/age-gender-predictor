import React from 'react';
import HistoryBox from './HistoryBox';

const History = ( { historiNama } ) => {
    //console.log(historiNama);
    return (
        <div className='pv3 pv4-ns pa4'>
            <h1 className='b db mb2 f2 f-subheadline-3 pv2 tc'>Your Name Search History</h1>
            {
                (historiNama.length === 0) ?
                <p className='f4 black-80 db mb2 pv2 tc'>No history.</p> :
                <div className="flex flex-wrap">
                {
                    
                    historiNama.map((item, i) => {
                        return(
                            <HistoryBox namaNya={item.namaNya} umurNya={item.umurNya} jkNya={item.jkNya} />
                        );
                    })
                }
                </div>
            }
            
            
            
        </div>
    )
}

export default History;