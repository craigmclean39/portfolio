import './css/reset.css';
import './css/styles.css';

import { useEffect, useState } from 'react';
import Map from './components/map';
import axios from 'axios';
import { Hop } from './types/trace';
import Body from './components/body';
import Header from './components/header';

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
      <Map traceData={traceData} />
      <Header />
      <Body />
    </div>
  );
}

export default App;
