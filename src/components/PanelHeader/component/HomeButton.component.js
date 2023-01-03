import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'


const HomeButton = () => {
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
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        بازگشت به سایت
      </Link>

    </div>
  );
}

export default HomeButton;
