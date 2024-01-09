import './App.css';
import Header from './components/Header';
import Economy from './components/Economy';
import Customer from './components/Customer';
import Features from './components/Features';
import Memoriesec from './components/Memoriesec';
import Tourroad from './components/Tourroad';
import Travelersec from './components/Travelersec';
import Formsec from './components/Formsec';
import Lastsec from './components/Lastsec';
import Swipcardsec from './components/Swipcardsec';
import Preloadersec from './components/Preloadersec';
import Backtotop from './components/Backtotop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
      <Backtotop />
      <Header />
      <Economy />
      <Features />
      <Tourroad />
      <Swipcardsec />
      <Travelersec />
      <Customer />
      <Memoriesec />
      <Formsec />
      <Lastsec />
    </>
  );
}

export default App;
