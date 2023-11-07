import React, { useReducer, createContext, ReactNode } from 'react';
import Data from './types'; // Import the Data type from types.ts
import reducer from './reducer';
import data from './data'; // Import the data object from data.tsx

type Action = {
    type: string;
    payload: any;
};

type ContextType = [Data, React.Dispatch<Action>];

const Context = createContext<ContextType>([data, () => {}]);

interface StoreProps {
    children: ReactNode;
}

const Store: React.FC<StoreProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, data);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
}

export { Context, Store };