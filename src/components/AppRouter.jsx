import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '../router/routs';

export const AppRouter = () => {

  const user = false;

  return (
    user 
        ? <Routes>
          {privateRoutes.map(({ path, component, index }, i) => (
            <Route key={ `route-${i}` } path={ path } Component={ component } index={ index }/>
          ))}
            <Route path={'*' || '/'} element={<Navigate to='/posts'/>}/>
          </Routes>
        :
        <Routes>
          {publicRoutes.map(({path, component, index}, i) => (
            <Route key={ `route-${i}` } path={ path } Component={ component } index={ index }/>
          ))}
        <Route path={"*" || '/'} element={<Navigate to='/login'/>}/>
        </Routes>
  )
}