import React from 'react';
import { Typography } from '@material-ui/core'
import {  makeStyles } from '@material-ui/core/styles';
import persiaIcon from '../../../asset/logo/persia-icon.png'
// import logoText from '../../../asset/logo/logotext.png'
import { Link } from 'react-router-dom';

const Logo = (props) => {

  const style = {
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
 
    logo: {
      width: 90,
      heigth: 90,
      filter: ' invert()'
      
    },
    logoText: {
      width: 250,
      height: 55,
      filter: ' invert()',

    }
  }

  const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      display: 'none',
      '&:hover':{
        filter:' drop-shadow(2px 2px 10px #111)'
      },
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        margin: '0 20px',
        padding: 5,
        marginTop: 2
      },
 
    }
  }));

  const classes = useStyles()
  return (
    <Link to='/home' >
      <div style={style.logoContainer}>
        
        <img   src={persiaIcon} style={style.logo} alt='logo' />
        <Typography className={classes.title} noWrap>
        {/* <img src={logoText} style={style.logoText} alt='logoText' /> */}
        </Typography>
      </div>
    </Link>

  );
}

export default Logo;
