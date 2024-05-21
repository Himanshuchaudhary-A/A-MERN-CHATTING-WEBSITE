import { Box, Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router";
import './SignUp.css';
import axios from 'axios';

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
  const [error, setError] = useState('');  //error handling state.

  //Function handles the showing of password.
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  //Function handles the user information when user entered something.
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "mobileNumber") {
      // Additional validation for mobile number
      const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
      setValues({
        ...values,
        mobileNumber: numericValue.slice(0, 10), // Trim to first 10 digits
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

//Function handles the submi and valdiate if all the fields values are present or not.
  const handleSubmit = (event) => {
    event.preventDefault();
    let missingFields: string[] = [];

    // Check each field individually
    if (!values.firstName) {
      missingFields.push("First Name");
    }
    if (!values.lastName) {
      missingFields.push("Last Name");
    }
    if (!values.dob) {
      missingFields.push("Date of Birth");
    }
    if (!values.mobileNumber) {
      missingFields.push("Mobile Number");
    }
    if (!values.email) {
      missingFields.push("Email");
    }
    if (!values.password) {
      missingFields.push("Password");
    }

    // Set error message for missing fields
    if (missingFields.length > 0) {
      setError(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return;
    }

    // If all fields are filled, proceed with signup
    setError("");
    signup(values);
  };

  const navigate = useNavigate();
  const handleSetShowSignUpPage = () => {
    navigate('/login');
  }

  const signup = async (values) => {
    try {
      await axios.post("http://localhost:8000/api/users/signup", values);
      console.log("Done");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='signup-page-container'>
      <Box className="shape"></Box>
      <Box className="shape-square"></Box>

      <form onSubmit={handleSubmit}>
        <Typography className='welcome-message'>New here ? Please Join Us !</Typography>
        <Typography className='first-name'> First Name</Typography>
        <Input name="firstName" onChange={handleChange} required />
        <Typography className='last-name'> Last Name</Typography>
        <Input name="lastName" onChange={handleChange} required />
        <Typography className='dob'> Date Of Birth </Typography>
        <Input name="dob" className='dob-input' type="date" onChange={handleChange} required />

        <Typography className='mobile-number'> Mobile Number</Typography>
        <Input name="mobileNumber" type='number' onChange={handleChange} required />
        <Typography className='email'> Email</Typography>
        <Input name="email" onChange={handleChange} required />
        <Typography className='signup-password'> Password</Typography>
        <Input
          name="password"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          }
          required
        />

        {error && <Typography className="error-message">{error}</Typography>}

        <div className='singup-action-buttons'>
          <Button type="submit" variant='contained' className='signup-button'>Sign Up</Button>
          <Button onClick={handleSetShowSignUpPage} className='cancel-button' variant='contained'>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
