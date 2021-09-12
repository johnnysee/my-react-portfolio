import react from "react";
import { Card, Image } from "semantic-ui-react";

const CvCard = ({ work }) => {
  return (
    <Card>
    <Card.Content>
      <Card.Header>{work.company}</Card.Header>
      <h2>{work.position}</h2>
    </Card.Content>
    </Card>
  )
}

export default CvCard;