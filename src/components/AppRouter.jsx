import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { privateRoutes, publicRoutes } from '../router/routs';
import { Context } from '../index';

export const AppRouter = () => {
  const { auth } = useContext(Context) 
  const [ user ] = useAuthState(auth);

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