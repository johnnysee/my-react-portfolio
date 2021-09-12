import react from "react";
import { List } from "semantic-ui-react";

const EducationCard = ({ education }) => {
  return (
    <List>
     <List.Item>{education.institution}</List.Item>
     <List.Item>{education.studyType}</List.Item>
     <List.Item>{education.startDate}</List.Item>
    </List>
  )
}

export default EducationCard;