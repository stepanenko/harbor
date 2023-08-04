import { Paper, TextField, Typography } from "@mui/material";

export const Login = () => {

  return (
    <Paper elevation={3} sx={{ padding: 5, bgcolor: "#8a8a8a" }}>
      <Typography variant="h5">Login</Typography>
      <TextField
        sx={{ padding: 1 }}
        required
        id="email"
        label="Email"
      />
      <TextField
        sx={{ padding: 1 }}
        required
        id="password"
        label="Password"
      />
    </Paper>
  );
}
