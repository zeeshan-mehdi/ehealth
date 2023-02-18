import './home.scss';

import React from 'react';
import Navigation from '../Navigation/Navigation';
import MainSection from './MainSection/MainSection';


 function Home() {
  return (
    <div>
        <Navigation/>
        <MainSection/>
    </div>
  )
}

export default Home;
