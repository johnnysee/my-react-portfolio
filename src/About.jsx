import React from 'react'
import { Container } from "semantic-ui-react"
import logo from './js.png'

const About = () => {
  return (
    <Container>
      <h1 id="about-header">About Me</h1>
      <img src={logo} alt="logo" />
      <p>My name is Johnny See and I am a Junior Full Stack Web Developer.</p>
      
      <p>I have 3.5 years of working experience within the automotive industry.</p>

      <p>Summer 2021 I quit my job at Volvo Buses to pursue my dream to become a developer.</p>

      <p>In my free time I like to study new things, but also test my skills by doing old projects.</p>
      <p>I live with my fiancé and daughter in lovely Gothenburg. I love playing padel and code!</p>
    </Container>
  )
}

export default About
