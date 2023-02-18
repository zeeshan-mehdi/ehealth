import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './Home/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SearchSection from './Search/SearchSection/SearchSection';

import { getAvailibility } from './API/availibility';
import SelectTime from './Search/SelectTime/SelectTime';
import Appointments from './Appointments/Appointments';
import Navigation from './Navigation/Navigation';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/search' element={
            <div>
              <Navigation/>
              <SearchSection/>
            </div>
          }  />

         

          <Route path='/book-appointment' element={<SelectTime 
                    availability={getAvailibility()}
                    timeSelect={(date: string, time: string) => {}}
                    setStage={(stage: number) => 1}
                    type=''
                    setAvailability={(result: any) => {}}
                    />}/>

          <Route path='/appointments' element={
            <div>
            <Navigation/>
            <Appointments/>
          </div>
          }  />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
