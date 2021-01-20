import React from 'react';
import useGlobalContext from './useGlobalState';
import Context from './context.store';

const GlobalStateProvider = ({ children }) => {
    return (
        <Context.Provider value={useGlobalContext()}>
            {children}
        </Context.Provider>
    );
};

export default GlobalStateProvider;
