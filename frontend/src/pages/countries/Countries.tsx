import { Box, Button, Paper, Typography } from "@mui/material";
import { Country, useCountries } from "./hooks";
import { Link } from "react-router-dom";

export const Countries = () => {
  // let { isLoading, isError, data, error } = useCountries(); // uncomment if server is online

  // for local dev use:
  let [isLoading, isError, error] = [false, true, { message: "server offline" }];
  let data: Country[] | undefined;

  function onCountrySelect(name: string) {
    console.log(name, "selected!");
  }

  if (isLoading) return <span>Loading...</span>;
  if (isError) {
    data = [
      { name: "UK", _id: "uk" },
      { name: "Italy", _id: "it" },
      { name: "Spain", _id: "sp" },
      { name: "Ukraine", _id: "ua" },
    ];
  }

  return (
    <>
      <Typography variant="h5" p={2} pb={0}>Village Countries</Typography>
      {isError &&
        <Typography variant="body2" pl={2} color="red">
          Couldn't get remote data: {error?.message}. Using local default data:
        </Typography>
      }

      <Box p={2} display="flex">
        <Paper sx={{ p: 1, width: 0.3 }}>
          <ul>
            {data?.map((country) => (
                <div key={country._id}>
                  <Button
                    to={`/countries/${country.name}`}
                    component={Link}
                    onClick={() => onCountrySelect(country.name)}
                    role="button"
                  >{country.name}</Button>
                </div>
            ))}
          </ul>
        </Paper>

        <Paper sx={{ p: 1, ml: 2, width: 0.7 }}>Test</Paper>
      </Box>
    </>);
};
