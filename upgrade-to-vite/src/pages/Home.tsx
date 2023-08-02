import { Button, Container, Typography } from "@mui/material";
import { ReactElement } from "react";

export const Home = (): ReactElement => {
  return (
    <Container>
      <Typography variant="h2" mb={4}>
        Welcome to Harbor
      </Typography>
      <Button variant="contained">Login</Button>
    </Container>
  );
};
