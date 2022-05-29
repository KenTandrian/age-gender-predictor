import React from "react";

export type HistoryCtxInterface = {
    name: string, 
    age: number, 
    gender: string
}

const HistoryContext = React.createContext<Array<HistoryCtxInterface>>([]);

export default HistoryContext;