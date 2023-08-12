
import styles from "./Countries.module.css";
import { useCountries } from "./hooks";


function Countries() {
  const { isLoading, isError, data, error } = useCountries();

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div className={styles.countries}>
      <h1>Village Countries</h1>
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

export default Countries;
