import React from 'react'
import Slider from '../components/Slider'
import Infocard from '../components/Infocard'
import { Carddata } from '../data'





const Home = () => {
  return (
    <>
    <Slider />
    <div className="container">
    <div className="wrapper">
  {Carddata.map((props) =>{

     
    return(
      
      <Infocard
        id=     {props.id}
        title = {props.title}
        Phone = {props.Phone}
        Email = {props.Email}
        Gender ={props.Gender}
        img = {props.img}
      />



    
    )
  
  })
  }
  </div>
  
  </div>

    </>
  )
}

export default Home
