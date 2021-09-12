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
     <List.Item>{work.summary2}</List.Item>
     <List.Item>{work.summary3}</List.Item>
     <List.Item>{work.summary4}</List.Item>
     <List.Item>{work.summary5}</List.Item>
     <List.Item>{work.summary6}</List.Item>
     <List.Item>{work.summary7}</List.Item>
     <List.Item>{work.summary8}</List.Item>
     <List.Item>{work.summary9}</List.Item>
     <List.Item>{work.summary10}</List.Item>
     <List.Item>{work.summary11}</List.Item>
     <List.Item>{work.summary12}</List.Item>
    </List>
  )
}

export default CvCard;