import './App.css';
import Header from './components/Header';
import Economy from './components/Economy';
import Customer from './components/Customer';
import Earthslide from './components/Earthslide';
import Features from './components/Features';
import Memoriesec from './components/Memoriesec';
import Tourroad from './components/Tourroad';
import Travelersec from './components/Travelersec';
import Formsec from './components/Formsec';
import Lastsec from './components/Lastsec';
import Swipcardsec from './components/Swipcardsec';
import Preloadersec from './components/Preloadersec';
import Backtotop from './components/Backtotop';

function App() {
  return (
    <>
      <Preloadersec />
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
