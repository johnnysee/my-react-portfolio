import React from 'react'
import { Container } from "semantic-ui-react"
import logo from './js.png'




const About = () => {
  return (
    <Container>
      <h1 id="about-header">About Me</h1>
      <img src={logo} />
      <p>My name is Johnny See and I am a Junior Full Stack Web Developer. I live with my fiancé and daughter in lovely Gothenburg.</p>
      <p>In my free time I like to study new things, but also test my skills by doing old projects.</p>
      <p>I love playing padel and code!</p>
    </Container>
  )
}

export default About
