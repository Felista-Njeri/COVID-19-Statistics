import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountrySelector from './components/CountrySelector';
import Statistics from './components/Statistics';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import './App.css';

export default function App () {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://covid-193.p.rapidapi.com/countries', {
          headers: {
            'X-RapidAPI-Key': '8513ccc648mshd41a3038a6b61fep1bae35jsn91d125b9fa97',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
          }
        });
        setCountries(response.data.response);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const url = selectedCountry === 'all' 
          ? 'https://covid-193.p.rapidapi.com/statistics'
          : `https://covid-193.p.rapidapi.com/statistics?country=${selectedCountry}`;
        const response = await axios.get(url, {
          headers: {
            'X-RapidAPI-Key': '8513ccc648mshd41a3038a6b61fep1bae35jsn91d125b9fa97',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
          }
        });
        setStats(response.data.response);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedCountry) {
      fetchStats();
    }
  }, [selectedCountry]);

  return (
    <>
    <Navigation />
    <LandingPage />
    <CountrySelector countries={countries} onSelect={setSelectedCountry} />
    <div className={`App ${selectedCountry !== 'all' && stats.length === 1 ? 'single-stat' : ''}`}>      
      {loading ? <div>LOADING...</div> : <Statistics stats={stats} />}
    </div>
    </>
  );
};

