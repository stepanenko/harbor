import { Button, Container, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export const Home = (): ReactElement => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/countries');

  return (
    <Container>
      <Typography variant="h1" mb={5} mt={2}>
        Harbor
      </Typography>
      <Button variant="contained" onClick={handleClick}>Explore</Button>
    </Container>
  );
};
