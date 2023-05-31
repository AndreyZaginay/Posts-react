import React from 'react';
import classes from './Loader.module';

export const Loader = () => {
  return (
    <div className={classes.lds-roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}
