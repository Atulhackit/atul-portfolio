import React from 'react'
import "./Home.scss"
import About from "../about/About"
import Header from "../../common/Header/Header"
import Projects from '../Projects/Projects'
const Home = () => {
  return (
    <div className='container'>
      {/* <Header/> */}
      <About/>
      <Projects/>
    </div>
  )
}

export default Home