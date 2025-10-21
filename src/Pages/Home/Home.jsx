import React from 'react'
import './Home.css'
import {Hero, Whoweare, Blog, Difference} from '../Home/index'


function Home() {
  return (
    <div className="Home">
      <Hero/>
      <Whoweare/>
      <Blog/>
      <Difference/>
        



    </div>
  )
}

export default Home