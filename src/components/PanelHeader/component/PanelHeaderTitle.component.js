import React from 'react';
import { Typography } from '@material-ui/core'
import {  makeStyles } from '@material-ui/core/styles';

const PanelHeaderTitle = () => {

  const style = {
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
  
    },
    logoText: {
      // padding: '5px'
    }
  }

  const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    }
  }));

  const classes=useStyles()
  return (
    <div style={style.logoContainer}>
      <Typography className={classes.title} variant="h6" noWrap>
       پنل مدیریت فروشگاه
      </Typography>
    </div>
  );
}

export default PanelHeaderTitle;
