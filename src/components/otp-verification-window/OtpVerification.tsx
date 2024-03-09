import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Input,
} from "@mui/material";

const OTPDialog = ({ open, onClose, onVerify }) => {
  const [enteredOTP, setEnteredOTP] = useState("");

  const handleVerify = () => {
    onVerify(enteredOTP);
    setEnteredOTP("");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter OTP</DialogTitle>
      <DialogContent>
        <Input
          value={enteredOTP}
          onChange={(e) => setEnteredOTP(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleVerify}>Verify OTP</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OTPDialog;
