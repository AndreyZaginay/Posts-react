import { Box, Button, Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import firebase from "firebase/compat/app";

import { Context } from '../index';

export const Login = () => {
  const {auth} = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await auth.signInWithPopup(provider);
    console.log(user);
  }

  return (
    <Container>
        <Grid container
              style={{height: window.innerHeight - 64}}
              alignItems={'center'}
              justifyContent={'center'}
        >
            <Grid style={{width: 400, background: 'ligthgray'}}
                  container
                  alignItems={'center'}
                  direction={'column'}
            >
                <Box p={5}>
                    <Button onClick={login} variant='outlined'>Login with google</Button>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}
