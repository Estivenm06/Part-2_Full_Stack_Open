/* EXERCISES 2.18 - 2.20 */
import React from 'react';
import axios from "axios"
import { useState, useEffect } from 'react';
import Choice from "./Components/Choice"

const App = () => {
  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState("")

  useEffect(() => {
      axios
        .get("https://studies.cs.helsinki.fi/restcountries/api/all")
        .then(response => { setCountries(response.data) })
  }, [])
  if(!countries){
    return null
  }
  const handleFilterChange = e => { setFilter(e.target.value) }

  return (
    <div>
      <form>
        find countries: <input value={filter} onChange={handleFilterChange} />
      </form>
      <Choice key={countries.id} result={countries} country={filter} />
    </div>
  );
};

export default App;