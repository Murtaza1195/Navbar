import React from 'react'
import Slider from '../components/Slider'
import Infocard from '../components/Infocard'
import { Carddata } from '../data'





const Home = () => {
  return (
    <>
    <Slider />
  {Carddata.map((props) =>{

    console.warn("check the data", props)
    return(
     <Infocard
      id=     {props.id}
      title = {props.title}
      Phone = {props.Phone}
      Email = {props.Email}
      Gender ={props.Gender}
      img = {props.img}
      
      />)
  
  })}
    </>
  )
}

export default Home
