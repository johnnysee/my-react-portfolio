import react from "react";
import { Card, List } from "semantic-ui-react";

const CvCard = ({ work }) => {
  return (
    <List>
     <List.Item>{work.company}</List.Item>
     <List.Item>{work.position}</List.Item>
     <List.Item>{work.startDate}</List.Item>
     <List.Item>{work.endDate}</List.Item>
     <List.Item>{work.summary}</List.Item>
    </List>
  )
}

export default CvCard;