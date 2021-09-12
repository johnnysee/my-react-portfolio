import React, { Component } from 'react'
import { Container, Grid } from "semantic-ui-react";
import axios from "axios";
import CvCard from "./CvCard"

class Cv extends Component {
  state = {
    work: [],
  };

  componentDidMount() {
    axios.get("./data/work.json").then((response) => {
      this.setState({ work: response.data });
    });
  }

  render() {
    const { work } = this.state;

    let workList = work.map((work) => {
      return (
        <div id={`work-${work.id}`} key={work.id}>
           <CvCard work={work} />
        </div>
      );
    });

    return (
      <Container>
        <h1 id="cv-header">Work Experience</h1>
        <Grid>{workList}</Grid>
        <h1 id="cv-header">Education</h1>
      </Container>
      
    )
  }
}

export default Cv;

