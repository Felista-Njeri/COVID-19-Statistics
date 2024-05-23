import React from 'react';

export default function CountrySelector  ({ countries, onSelect })  {
  return (
    <div className='countryselector'>
      <label htmlFor="country">Select a country: </label>
      <select id="country" onChange={(e) => onSelect(e.target.value)}>
        <option value="all">All</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </select>
    </div>
  );
};

