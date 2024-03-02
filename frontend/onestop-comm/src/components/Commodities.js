import { useState } from 'react'
import Commidity from './Commidity'
import "./Commodities.css";

function Commodities({ getCurrentCommodity }) {
  const commodities = [
    "Palm Oil",
    "Cocoa Powder",
    "Paper",
    "Sugar",
    "Fertilizer",
    "Crude Oil",
    "Cement",
    "Pharma",
    "IT",
    "Skim milk powder",
    "Butter",
    "Dry fruits",
  ];

  return (
    <div className="Commodities">
      <h2>List of Commodities</h2>

      {commodities.map((commodity) => (
        <Commidity
          key={commodity}
          getCurrentCommodity={getCurrentCommodity}
          commodityName={commodity}
          className="Commodity" // Assign the appropriate class
        />
      ))}
    </div>
  );
}

export default Commodities;