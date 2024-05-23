// src/Statistics.js
import React from 'react';

const Statistics = ({ stats }) => {
  if (!stats || stats.length === 0) return <div>No data available</div>;

  if (stats.length === 1) {
    const stat = stats[0];
    return (
      <div className="stat">
        <h2>{stat.country}</h2>
        <p>Continent: {stat.continent}</p>
        <p>Population: {stat.population}</p>
        <p>Tests: {stat.tests.total}</p>
        <p>Cases: {stat.cases.total}</p>
        <p>Deaths: {stat.deaths.total}</p>
      </div>
    );
  }

  return (
    <div className="statistics-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat">
          <h2>{stat.country}</h2>
          <p>Continent: {stat.continent}</p>
          <p>Population: {stat.population}</p>
          <p>Tests: {stat.tests.total}</p>
          <p>Cases: {stat.cases.total}</p>
          <p>Deaths: {stat.deaths.total}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
