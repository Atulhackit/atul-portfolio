import React from 'react'
import "./About.scss"
import bgImage from "../../../assets/images/atulPic.jpg";
const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='about'>
        {/* <img src={bgImage} /> */}
        <h2>
          Software Engineer with <br/> <span className='highlighted'> 2 Years  </span>of Experience
        </h2>
        <button className='downloadButton'> Download CV</button>
      </div>
    </div>
  )
}

export default About