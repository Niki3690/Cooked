import React, { useEffect } from 'react'
import Recipes from './Recipes'

const About = () => {
  useEffect(() => {
    document.title = "Cooked_About"
  }, [])


  return (

    <div>
      <h3 className="text-center mt-5 fw-bold mb-5">ABOUT-PAGE</h3>

      <Recipes />
    </div>
  )
}

export default About
