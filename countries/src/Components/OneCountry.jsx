import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OneCountry = ({ result }) => {
    const keys = Object.keys(result.languages)
    const [allWeather, setAllWeather] = useState(null)
    //console.log(allWeather);

    useEffect(() => {
        const key_api = "9583dcd1f6b64e01a55192710240704"
        axios
            .get(`http://api.weatherapi.com/v1/current.json?key=${key_api}&q=${result.name.common}&aqi=yes`)
            .then(response => {
                //console.log(response.data);
                setAllWeather(response.data)
            }).catch(error => {
                console.log(error);
            })
    }, [])
    if (!allWeather) {
        return null
    }

    return (
        <div>
            <h1>{result.name.common}</h1>
            <p>capital {result.capital[0]}</p>
            <p>area {result.area}</p>
            <div>
                <h2>Languages:</h2>
                <ul>{keys.map((keys, id) => <li key={id}>{result.languages[keys]}</li>)}</ul>
            </div>
            <img src={result.flags.png} alt="flag" width="300px" height="200px" />
            <div>
                <h3>Weather in {result.capital[0]}</h3>
                <p>temperature: {allWeather.current.temp_c} Celcius</p>
                <img src={allWeather.current.condition.icon} alt="weather" />
                <p>wind: {allWeather.current.gust_mph} mph</p>
            </div>
        </div>
    );
};

export default OneCountry;