import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import PanelHeaderTitle from './component/PanelHeaderTitle.component';
import ToggleButtons from './component/ToggleButtons/ToggleButton.component';
import NavButtons from './component/PanelHeaderNavButton.component';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    left: 'auto',
    right: 0,
    flexDirection:'column'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: ''
  },
  toolbar: {
    justifyContent: 'space-between'
  }

}));

const  PanelHeader = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar elevation={1} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <PanelHeaderTitle />
          <ToggleButtons/>
          <NavButtons/>
        </Toolbar>
      </AppBar>
  

      {children}
    </div>
  );
}

export {PanelHeader}
