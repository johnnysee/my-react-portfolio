import React, { Component } from 'react'
import { Container, Grid } from "semantic-ui-react";
import axios from "axios";
import WorkCard from "./WorkCard"
import EducationCard from './EducationCard';

class Cv extends Component {
  state = {
    work: [],
    education: [],
  };

  componentDidMount() {
    axios.get("./data/work.json").then((response) => {
      this.setState({ work: response.data });
    });
    axios.get("./data/education.json").then((response) => {
      this.setState({ education: response.data });
    });
  }

  render() {
    const { work } = this.state;
    const { education } = this.state;

    let workList = work.map((work) => {
      return (
        <div id={`work-${work.id}`} key={work.id}>
           <WorkCard work={work} />
        </div>
      );
    });

    let educationList = education.map((education) => {
      return (
        <div id={`education-${education.id}`} key={education.id}>
           <EducationCard education={education} />
        </div>
      );
    });

    return (
      <Container>
        <h1 id="cv-header">Work Experience</h1>
        <Grid.Column>{workList}</Grid.Column>
        <h1 id="cv-header">Education</h1>
        <Grid.Column>{educationList}</Grid.Column>
      </Container>
      
    )
  }
}

export default Cv;

