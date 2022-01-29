import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tour from './Tour';
function FetchTour() {
  const [tourData, settourData] = useState([]);
  const fetchApi = async () => {
    let config = {
      url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      method: 'GET',
    };
    console.log(config);
    let { data } = await axios(config);
    settourData(data);
    // console.log(data, 'DATA');
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (tourData.length === 0) {
    return (
      <>
        <h2>No Photography Left..</h2>
        <button className='reload-Btn' onClick={fetchApi}>
          Refresh
        </button>
      </>
    );
  }
  // console.log('tourData::', tourData);
  return (
    <div>
      <Tour data={tourData && tourData} setter={settourData} />
    </div>
  );
}

export default FetchTour;
