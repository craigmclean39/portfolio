import './css/reset.css';
import './css/fonts.css';
import './css/styles.css';

import { useEffect, useState } from 'react';
import Map from './components/map';
import axios from 'axios';
import Body from './components/body';
import Header from './components/header';
import { Country } from './types/geoTypes';

function App() {
  const [countryData, setCountryData] = useState<Country[]>([]);

  useEffect(() => {
    async function fetchData() {
      // console.log('trying to fetch data');

      try {
        const response = await axios({
          method: 'get',
          url: 'http://localhost:3000/map',
          responseType: 'json',
        });

        const countries: Country[] = [];
        response.data.forEach((country: Country[]) => {
          countries.push(country[0]);
        });

        setCountryData(countries);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className='App'>
      <div className='map-overlay'></div>
      <Map countryData={countryData} />
      <Header />
      <Body />
    </div>
  );
}

export default App;
