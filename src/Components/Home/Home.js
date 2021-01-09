import React, {useEffect, useState} from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);


useEffect(()=> {
  fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data=> setCountries(data))
}, [])

const homeStyle = {
    color: 'purple',
    textAlign:'center',
}
    return (
        <div style ={homeStyle}>
            <h1>Welcome to the world!!!</h1>
            <h3>Countries : {countries.length}</h3>
     {
       countries.map(country => <Country country={country}></Country>
       )
     }
        </div>
    );
};

export default Home;