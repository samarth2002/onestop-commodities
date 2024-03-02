import React from 'react'
import './Infobar.css'
import {Trends, News} from '../data/CommodityData'

function Infobar({ commodityName }) {
  const commodityTrends = Trends[commodityName] || {};
  const commodityNews = News[commodityName] || {};

  return (
    <div className="Infobar">
      <h2>Info Section</h2>
      <ul>
        <li key={commodityName}>
          <h3>{commodityName}</h3>
          <h3>Trends</h3>
          <ul>
            {Object.entries(commodityTrends).map(([source, url]) => (
              <li key={source}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {source}
                </a>
              </li>
            ))}
          </ul>
          <h3>News</h3>
          <ul>
            {Object.entries(commodityNews).map(([source, url]) => (
              <li key={source}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {source}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Infobar;