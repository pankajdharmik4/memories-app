import React,{useState} from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {Avatar, Button, Paper,Grid, Typography, Container, Grow, TextField} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import Icon from './icon';
import Input from './Input';

import useStyles from './styles'

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup,setIsSignUp] = useState(false);

  const handleSubmit = () =>{

  };

  const handleChange = ()=>{

  };

  const handleShowPassword = () =>{
    setShowPassword((prevShowPassowrd)=>!prevShowPassowrd)
  }

  const switchMode =() =>{
    setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
    handleShowPassword(false);
  }

  const googleSuccess = async (res)=>{
    console.log(res);
  };

  const googleFailure = (error)=>{
    console.log(error)
      console.log("Google Sign In was unsuccessful. Try Again Later")
  };
  
  

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant='h5'>{isSignup? "Sign Up":"Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
              {
                isSignup && (
                  <>
                    <Input name='firstname' label='First Name' handleChange={handleChange}  half/>

                    <Input name='firstname' label='First Name' handleChange={handleChange}  half/>
                  </>
                )}
                <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                <Input name="password" label="password" handleChange={handleChange} type={showPassword? "text":"password"} handleShowPassword={handleShowPassword}/>

                { isSignup && <Input name='confirmPassword' label="Repeat Password" handleChange={handleChange} type='password'/>}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            {isSignup? 'SignUp':'Sign In'}
          </Button>
          <GoogleLogin
            clientId='238995846357-ceglsh8d1l0tl54upfb139d16a6v091g.apps.googleusercontent.com'
            render={(renderProps)=>(
              <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant='contained'>
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <Grid container justify="flex-center">
            <Grid item>
              <Button onClick={switchMode}>
                    {isSignup?'Already have an account? Sign In':"Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth