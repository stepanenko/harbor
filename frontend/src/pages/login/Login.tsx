import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const printValues = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <Paper elevation={3} sx={{ p: 5, m: 5 }}>
      <Box mb={4}>
        <Typography variant="h5" mb={3}>Login</Typography>
        <TextField
          sx={{ mr: 2 }}
          required
          name="email"
          id="email"
          label="Email"
          value={email}
          onChange={handleEmail}
        />
        <TextField
          required
          name="password"
          id="password"
          label="Password"
          value={password}
          onChange={handlePassword}
        />
      </Box>
      <Button variant="contained" onClick={printValues}>Log values</Button>
    </Paper>
  );
}
