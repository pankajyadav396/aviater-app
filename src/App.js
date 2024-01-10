import './App.css';
import Header from './components/Header';
import Economy from './components/Economy';
import Preloadersec from './components/Preloadersec';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import Passengers from './Pages/Passengers';
import Shedule from './Pages/Shedule';

function App() {
  useEffect(() => {
    AOS.init(
      {
        duration: 2000,
        once: true,
      }
    )
  })
  return (
    <>
      < Preloadersec />
      <Header />
      <Economy />
      <Routes>
        <Route path='/Home' exact element={<Home />}></Route>
        <Route path='/Orders' element={<Orders />}></Route>
        <Route path='/Passengers' element={<Passengers />}></Route>
        <Route path='/Shedule' element={<Shedule />}></Route>
      </Routes>
    </>
  );
}

export default App;
