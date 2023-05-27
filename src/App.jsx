import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import About from './About';
import Feed from './Feed';
import NotFound from './NotFound';

const routes = [
    {
        path: '',
        component: About,
        name: 'About',
        index: true
    },
    {
        path: 'feed',
        component: Feed,
        name: 'Feed'
    },
    {
        path: '*',
        component: NotFound
    }
];

const App = () => (
    <BrowserRouter>
        <nav>
            {
                routes.slice(0, -1).map(({ path, name }, i) => (
                    <NavLink key={ `nav-${i}` }  to={ path }>{ name }&nbsp;</NavLink>
                ))
            }
        </nav>

        <Routes>
            {
                routes.map(({ path, component, index }, i) => (
                    <Route key={ `route-${i}` } path={ path } Component={ component } index={ index }/>
                ))
            }
        </Routes>
    </BrowserRouter>
);

export default App;
