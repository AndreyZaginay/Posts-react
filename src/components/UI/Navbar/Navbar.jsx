import { AppBar, Button, Grid, Toolbar, Typography} from '@mui/material';
import React from 'react';

import '@assets/navbar';

export const Navbar = () => {
  return ( 
    <AppBar color={'primary'} position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" component="div">
            Posts
          </Typography>
          <Grid container justifyContent={'flex-end'}>
            <div className='buttons'>
              <Button variant='contained' color="secondary">Login</Button>
              <Button variant='contained' color="secondary">Logout</Button>
            </div>
          </Grid>
        </Toolbar>
    </AppBar>
  )
}