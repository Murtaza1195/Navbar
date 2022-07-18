import React from 'react'

const Topbar = () => {
    var curDate = new Date();
    var displayTodayDate = curDate.toLocaleDateString();
    console.log(displayTodayDate);
    var curTime = curDate.toLocaleTimeString();
  return (
   <>

    <p>{displayTodayDate}  {curTime }</p>
   
   
   </>
  )
}

export default Topbar
