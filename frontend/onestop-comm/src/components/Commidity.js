import React from 'react'
import Infobar from "./Infobar";

function Commidity({commodityName, getCurrentCommodity}) {

    const [currentCommodity, setCurrentCommodity] = React.useState("")

    const handleClick = () =>{
        getCurrentCommodity(commodityName)
        console.log(commodityName + "clicked")
    }
    return (
    <div className='Commodity'>
        <button onClick={handleClick}>{commodityName}</button>
        {currentCommodity!=="" && <Infobar commodityName = {currentCommodity} />}
    </div>
  )
}

export default Commidity