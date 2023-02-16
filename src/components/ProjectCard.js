import { Col } from "react-bootstrap";
import '../App.css'

export const ProjectCard = ({ title, description, imgUrl,text }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br/>
          <span>{text}</span>
        </div>
      </div>
    </Col>
  )
}