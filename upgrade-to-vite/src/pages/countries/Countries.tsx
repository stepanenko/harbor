
import styles from "./Countries.module.css";
import { Country, useCountries } from "./hooks";

export const Countries = () => {
  // let { isLoading, isError, data, error } = useCountries(); // uncomment if server is online

  // for local dev use:
  let [isLoading, isError, error] = [false, true, { message: "server offline" }];
  let data: Country[] | undefined;

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
    <div className={styles.countries}>
      <h2>Village Countries</h2>
      {isError && <>
        <span>Couldn't get remote data: {error?.message}</span>
        <p>Using local default data:</p>
      </>}

      <ul>
        {data?.map(country => {
          return <div key={country._id}>
            <span>{country.name} </span>
            <button onClick={() => deleteCountry(country.name)}>Delete</button>
          </div>
        })}
      </ul>
    </div>
  );

  function deleteCountry(name: string) {
    console.log(name, 'deleted!');
  }
}
