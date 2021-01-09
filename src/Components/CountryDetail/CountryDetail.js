import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {name} = useParams();
    const [country,setCountry] = useState({});
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch (url)
        .then(res => res.json())
        .then(data => setCountry)
    },[])
    return (
        <div>
            <h3>this is country detail: {name}</h3>
            <h4>{country.capital}</h4>

        </div>
    );
};

export default CountryDetail;