<<<<<<< Updated upstream

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Commodities from './components/Commodities';
import Infobar from './components/Infobar';

function App() {
  const [currentCommodity, setCurrentCommodity] = React.useState("")

  const getCurrentCommodity = (selectedCommodity) =>{
    setCurrentCommodity(selectedCommodity)
  }
   return (
     <div className="App">
       <Navbar />
       <Commodities getCurrentCommodity={getCurrentCommodity} />
       {currentCommodity !== "" && <Infobar commodityName={currentCommodity} />}
     </div>
   );
=======
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to ONESTOP COMMODITIES</h1>
    </div>
  );
>>>>>>> Stashed changes
}

export default App;
