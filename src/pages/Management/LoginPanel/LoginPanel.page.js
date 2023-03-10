import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { authentication } from '../../../api/API';
import { useState } from 'react';




function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontWeight: 'bold'
  },
  title: {
    margin: '35px 0'
  }
}));

const SignIn = ()=> {
  let history = useHistory()
  const classes = useStyles();


  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('username', username)
    formData.append('password', password)
    try {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      const { status, data } = await authentication(formData)
      console.log(status)
      if(data === 'No user with those credentials!') {

      }else{
        localStorage.setItem('token',data.token)
        history.push("/panel/products");
      }

    }
    catch (error) {
      console.log(error.message)
    }

  }

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.title} >
          ورود به پنل مدیریت فروشگاه
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <span dir='ltr'>
            <TextField

              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label=" Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}

            />
          </span>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="مرا به خاطر بسپار"
          />
          {/* <RouterLink to={'/panel/products'} style={{ textDecoration: 'none' }}> */}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ورود
          </Button>
          {/* </RouterLink> */}

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                پسورد خود را فراموش کرده اید؟
              </Link>
            </Grid>
            <Grid item>
              {/* Material link  :*/}
              <Link variant="body2">
                {/* router link : */}
                <RouterLink to='/' style={{ textDecoration: 'none' }}  >
                  بازگشت به سایت
                </RouterLink>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export { SignIn }
