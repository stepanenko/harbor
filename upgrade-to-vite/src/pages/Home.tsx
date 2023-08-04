import { Button, Container, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export const Home = (): ReactElement => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/login');

  return (
    <Container>
      <Typography variant="h4" mb={5} mt={2}>
        Welcome to Harbor
      </Typography>
      <Button variant="contained" onClick={handleClick}>Login</Button>
    </Container>
  );
};
