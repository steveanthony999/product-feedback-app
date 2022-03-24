import { useEffect } from 'react';
import axios from 'axios';

import CategoryBoxComponent from '../Components/CategoryBoxComponent';

import BackgroundHeaderImg from '../assets/suggestions/desktop/background-header.png';

const HomePage = () => {
  const fetchData = async () => {
    const res = await axios.get(`data.json`);

    console.log(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='HomePage'>
      <div className='container'>
        <div className='left'>
          <div
            className='top'
            style={{
              background: `url(${BackgroundHeaderImg}) no-repeat center center/cover`,
            }}>
            <h2 className='h2 text-white'>Frontend Mentor</h2>
            <br />
            <p className='body-2 text-white'>Feedback Board</p>
          </div>
          <div className='middle'>
            <CategoryBoxComponent />
          </div>
          <div className='bottom'>bottom</div>
        </div>
        <div className='right'>right</div>
      </div>
    </div>
  );
};
export default HomePage;
