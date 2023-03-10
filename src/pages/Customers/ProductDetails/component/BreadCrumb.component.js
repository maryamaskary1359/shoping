import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import { makeStyles } from '@material-ui/core';
import { wordToPersian } from '../../../../utils/convertNameToPersian';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}));

export const BreadCrumb = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Breadcrumbs separator={<ArrowBackIosSharpIcon fontSize="small" />} aria-label="breadcrumb">
        <Link className={classes.link} to={`/home`} >
         صفحه اصلی
        </Link>
        <Link className={classes.link}to={`/home/${props.group}/${props.subgroup}`} >
          {wordToPersian(props.subgroup)}
        </Link>
        <Typography color="textSecondary">
          {props.name}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
