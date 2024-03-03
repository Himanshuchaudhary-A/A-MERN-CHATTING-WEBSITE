import { Box, Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router";
import './SignUp.css';

const SignUp = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    mobileNumber: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false); // password visibility state

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };
 
  const navigate = useNavigate();
  const handleSetShowSignUpPage = () => {
    navigate('/login');
  }
  return (
    <div className='signup-page-container'>
      <Box className="shape"></Box>
      <Box className="shape-square"></Box>
      
      <form onSubmit={handleSubmit}>
        <Typography className='welcome-message'>New here ? Please Join Us !</Typography>
        <Typography className='first-name'> First Name</Typography>
        <Input name="firstName" onChange={handleChange} />
        <Typography className='last-name'> Last Name</Typography>
       <Input name="lastName" onChange={handleChange} />
        <Typography className='dob'> Date Of Birth </Typography>
        <Input name="dob" className='dob-input' type="date" onChange={handleChange} />
        
        <Typography className='mobile-number'> Mobile Number</Typography>
        <Input name="mobileNumber" type='number' onChange={handleChange} />
        <Typography className='email'> Email</Typography>
        <Input name="email" onChange={handleChange} />
        <Typography className='signup-password'> Password</Typography>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  }
                />

        <div className='singup-action-buttons'>
          <Button type="submit" variant='contained' className='signup-button'>Sign Up</Button>
          <Button onClick={handleSetShowSignUpPage}  className='cancel-button' variant='contained'>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;