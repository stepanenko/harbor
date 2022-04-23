
import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./Countries.module.css";

interface Country {
  country: string,
  _id: string
};

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const { data } = await axios.get("http://localhost:4000/countries");
      console.log('countries', data);
      setCountries(data);
    }

    getCountries();
  }, []);

  return (
    <div className={styles.countries}>
      <h1>Countries</h1>
      <ul>
        {countries.map((c: Country) => <li key={c._id}>{c.country}</li>)}
      </ul>
    </div>
  );
}

export default Countries;
