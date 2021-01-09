import React from 'react';
import { Link } from 'react-router-dom';
const Country = (props) => {
    const {name, capital, code} = props.country;
    const countryStyle = {
        border: '1px solid goldenrod',
        margin: '20px',
        padding: '20px',
        borderRadius: '5px',
        backgroundColor: 'skyBlue',
        textAlign: 'center',
        color: 'darkBlue',
      
      }
    return (
        <div style={countryStyle}>
            <h3>Country Name: {name}</h3>
            <h4>Country Capital: {capital}</h4>
            <h4>Country Code: {code}</h4>
            <Link to={`/country/${name}`}>Show Detail of {name}</Link>
        </div>
    );
};

export default Country;