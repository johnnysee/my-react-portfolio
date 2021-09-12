import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

class CV extends Component {
  state = {
    work: [
      {
        id: 1,
        company: "Volvo",
      },
      {
        id: 2,
        name: "Lynk",
      },
    ],
  };

  render() {
    const { work } = this.state;

    let workList = work.map((work) => {
      return (
        <div id={`work-${work.id}`} key={project.id}>
          <h3>{project.name}</h3>
        </div>
      );
    });

    return (
      <Container>
        <h1 id="cv-header">Work Experience</h1>
        {workList}
      </Container>
    )
  }

export default CV



// Hardcoded below.

      {/* <h1 id="cv-tab">CV</h1>
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
      <p>2014 - 2017</p> */}
