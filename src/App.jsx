import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/UI/Navbar/Navbar';

const App = () => (
    <div className='App'>
        <Navbar/>
        <div className='app-content'>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </div>
    </div>
);

export default App;
