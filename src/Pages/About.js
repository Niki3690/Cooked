import React, { useEffect } from 'react'
import Recipes from './Recipes'

const About = () => {
  useEffect(() => {
    document.title = "Cooked_About"
  }, [])


  return (
    <div>
      <Recipes />
    </div>
  )
}

export default About
