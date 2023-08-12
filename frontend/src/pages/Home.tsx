import { Button, Container, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export const Home = (): ReactElement => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/countries');

  return (
    <Container>
      <Typography variant="h1" mb={2} mt={2}>
        Harbor
      </Typography>
      <Typography variant="h5" mb={5}>
        Citizen of the Earth
      </Typography>
      <Button variant="contained" onClick={handleClick}>Explore</Button>
    </Container>
  );
};
