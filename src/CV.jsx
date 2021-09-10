import React from 'react'
import { Container } from 'semantic-ui-react'

const CV = () => {
  return (
    <Container>
      <h1 id="cv-tab">CV</h1>
      <h2 id="cv-tab">Work Experience</h2>
      <h3>Wiring & Harness Engineer</h3>
      <h4>Volvo Buses</h4>
      <ul>
        <li>
        Design electrical schematics and bundle drawings for suppliers, customer adaptation, aftermarket and on-going production release.
        </li>
        <li>
        Tools: SaberES Designer 2020 and Saber Harness 2015
        </li>
        <li>
        PDM-system KOLA
        </li>
      </ul>
      <h2 id="cv-tab">Education</h2>
      <h3>Linköping University</h3>
      <h4>Bachelor's degree, Mechanical Engineering, Bachelor of Science</h4>
      <p>2014 - 2017</p>

    </Container>
  )
}

export default CV