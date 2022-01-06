import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/map';
import axios from 'axios';
import { Hop } from './types/trace';

function App() {
  const [traceData, setTraceData] = useState<Hop[]>([]);

  useEffect(() => {
    async function fetchData() {
      // console.log('trying to fetch data');
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3000/map',
        responseType: 'json',
      });

      // console.log(response);

      setTraceData(response.data);
    }

    fetchData();
  }, []);
  return (
    <div className='App'>
      <Map data={traceData} />
    </div>
  );
}

export default App;
