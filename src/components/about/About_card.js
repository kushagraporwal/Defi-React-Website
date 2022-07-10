import React from 'react'
import './About.css'

const About_card = (props) => {
  return (
    <>
    <div className='icon-container'>
      {props.icon}
    </div>
    <h3>{props.heading}</h3>
    <p>{props.text}</p>
    </>
  )
}

export default About_card