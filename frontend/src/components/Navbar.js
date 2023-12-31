import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>      
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button href='/'>Today</Button>
        <Button href='/SpecificDate'>Date</Button>        
      </ButtonGroup>
    </div>
  );
}
