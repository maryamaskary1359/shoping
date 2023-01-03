import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'


 const CartButton = ()=> {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        color: '#fff',
    
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to='/panel/login' style={{ textDecoration: 'none' }}>
          مدیریت
      </Link>

    </div>
  );
}

export default CartButton
