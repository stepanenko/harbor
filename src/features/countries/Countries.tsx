
import styles from "./Countries.module.css";
import { useCountries, Country } from "./hooks";


function Countries() {
  const { isLoading, isError, data, error } = useCountries();

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div className={styles.countries}>
      <h1>Countries</h1>
      <ul>
        {data?.map((c: Country) => <li key={c._id}>{c.country}</li>)}
      </ul>
    </div>
  );
}

export default Countries;
