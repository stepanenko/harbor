import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: ChangeEvent) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e: ChangeEvent) => {
    setPassword(e.target.value);
  }

  const printValues = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <Paper elevation={3} sx={{ padding: 5, bgcolor: "#8a8a8a" }}>
      <Box mb={3}>
        <Typography variant="h5" mb={4}>Login</Typography>
        <TextField
          sx={{ padding: 1 }}
          required
          name="email"
          id="email"
          label="Email"
          value={email}
          onChange={handleEmail}
        />
        <TextField
          sx={{ padding: 1 }}
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
