import { AppBar, Button, Grid, Toolbar, Typography} from '@mui/material';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';

import { Context } from '../../..';
import '@assets/navbar';

export const Navbar = () => {

  const { auth } = useContext(Context) 
  const [ user ] = useAuthState(auth);

  return ( 
    <AppBar color={'primary'} position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" component="div">
            Posts
          </Typography>
          <Grid container justifyContent={'flex-end'}>
            <div className='buttons'>
              {user 
              ? <Button onClick={() => auth.signOut()} variant='contained' color="secondary">Logout</Button>
              : <NavLink to={'/login'}><Button variant='contained' color="secondary">Login</Button></NavLink>
              }
            </div>
          </Grid>
        </Toolbar>
    </AppBar>
  )
}