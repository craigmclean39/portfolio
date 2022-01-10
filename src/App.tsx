import './css/reset.css';
import './css/fonts.css';
import './css/styles.css';

import { useEffect, useState } from 'react';
import Map from './components/map';
import axios from 'axios';
import Body from './components/body';
import Header from './components/header';
import { FeatureCollection } from './types/geoTypes';

function App() {
  const [countryFeatureCollection, setCountryFeatureCollection] =
    useState<FeatureCollection | null>(null);

  useEffect(() => {
    async function fetchData() {
      // console.log('trying to fetch data');

      try {
        const response = await axios({
          method: 'get',
          url: 'http://localhost:3000/map/api/countries',
          responseType: 'json',
          params: { countries: ['CA'] },
        });

        console.log(response);

        setCountryFeatureCollection(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className='App'>
      <div className='map-overlay'></div>
      <Map countryFeatureCollection={countryFeatureCollection} />
      <Header />
      <Body />
    </div>
  );
}

export default App;
