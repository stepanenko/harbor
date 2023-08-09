import { Box, Paper, Typography } from "@mui/material";
import { Country, useCountries } from "./hooks";

export const Countries = () => {
  // let { isLoading, isError, data, error } = useCountries(); // uncomment if server is online

  // for local dev use:
  let [isLoading, isError, error] = [false, true, { message: "server offline" }];
  let data: Country[] | undefined;

  function deleteCountry(name: string) {
    console.log(name, "deleted!");
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
      <Typography variant="h5" p={2}>
        Village Countries
      </Typography>
      <Box p={2} display="flex">

        <Paper sx={{ p: 1, width: 0.3 }}>
          {isError &&
            <span>Couldn't get remote data: {error?.message}. Using local default data:</span>
          }

          <ul>
            {data?.map((country) => {
              return (
                <div key={country._id}>
                  <span>{country.name} </span>
                  <button onClick={() => deleteCountry(country.name)}>x</button>
                </div>
              );
            })}
          </ul>
        </Paper>

        <Paper sx={{ p: 1, ml: 2, width: 0.7 }}>Test</Paper>
      </Box>
    </>);
};
