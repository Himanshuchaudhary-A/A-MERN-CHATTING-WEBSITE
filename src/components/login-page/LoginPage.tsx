import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Box,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import SentimentSatisfiedSharpIcon from "@mui/icons-material/SentimentSatisfiedSharp";
import ErrorIcon from '@mui/icons-material/Error';
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState(""); // email state
  const [password, setPassword] = useState(""); // password state
  const [showPassword, setShowPassword] = useState(false); // password visibility state
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean | null>(null); // Allow user to enter chat-room.
  const [error, setError] = useState(""); // Error message state
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSetShowSignUpPage = () => {
    navigate("/signup");
  };

  const handleloginAction = async (email, password) => {
    try {
      let res = await axios.post("http://localhost:8000/api/users/login", {
        email,
        password,
      });
      if (res) {
        setIsUserAuthenticated(true);
        navigate("/home");
      }
    } catch (err) {
      setError("Incorrect password or email address ! Please Sign Up.");
      setIsUserAuthenticated(false);
    }
  };

  useEffect(()=> {
    if(isUserAuthenticated) {
      setError('')
    }
  },[isUserAuthenticated])

  return (
    <Box className="login-page-container">
      <Box className="shape"></Box>
      <Box className="shape-square"></Box>
      {/**Login form start here */}
      <form className="login-page-form">
        <Typography className="login-here">
          Hi, Welcome! Please Login <SentimentSatisfiedSharpIcon />
        </Typography>
        {error && <div className="error-div"><ErrorIcon /> <Typography className="error-message">{error}</Typography></div> }
        <div className="credentials-area">
          <Typography className="user-name">Email or Phone</Typography>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <Typography className="password">Password</Typography>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  className="show-button"
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Link to="www.google.com">Forgot Password?</Link>
          <div className="button-area">
            <Button
              className="login-button"
              variant="contained"
              onClick={() => handleloginAction(email, password)}
            >
              Log In
            </Button>
            <Typography className="or-text">or</Typography>
            <Button
              className="signup-button"
              variant="contained"
              onClick={() => handleSetShowSignUpPage()}
            >
              Sign Up
            </Button>
          </div>
          <div className="social-login">
            <Button className="google-login" variant="contained">
              <GoogleIcon /> Log in with Google
            </Button>
            <Button className="fb-login" variant="contained">
              <FacebookIcon /> Log in with Facebook
            </Button>
          </div>
        </div>
      </form>
    </Box>
  );
};

export default LoginPage;
