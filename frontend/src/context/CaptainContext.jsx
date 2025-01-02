import React, { createContext, useState,useContext } from 'react';
import { use } from 'react';

export const CaptainDataContext = createContext();




const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [Error, setError] = useState(null);

    const updateCaptain =  (captainData) => {
        setCaptain(captainData)
    }
    const value={
        captain,
        setCaptain,
        updateCaptain,
        isLoading,
        setIsLoading,
        Error,
        setError
    }

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default   CaptainContext ;