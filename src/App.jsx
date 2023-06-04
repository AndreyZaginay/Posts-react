import React, { useContext } from 'react';
import { BrowserRouter } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';

import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/UI/Navbar/Navbar';
import { Context } from './index';
import { Loader } from './components/UI/Loader/Loader';

export const App = () => { 

    const { auth } = useContext(Context);
    const [ user, loading, error ] = useAuthState(auth);

    if (loading) {
        return <Loader/>
    }
    
    return (
    <BrowserRouter>
        <div className='App'>
            <Navbar/>
            <div className='app-content'>
                <AppRouter/>
            </div>
        </div>
    </BrowserRouter>
    )
   
};

