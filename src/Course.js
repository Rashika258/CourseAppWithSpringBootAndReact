import React from "react";
import {
  Card,
  Button,
  CardBody,
  CardSubtitle,
  CardText,
  Container,
} from "reactstrap";
import axios from "axios";
import base_url from "./api/bootApi";
import { toast } from "react-toastify";

function Course({course, update}) {

  const deleteCourse=(id)=> {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        toast.success("Course deleted successfully");
        update(id);
      },
      (error)=> {
        toast.error("Course Not Deleted, something went wrong");
      }
    )
  }

  return (
    <Card className="text-center my-3" >
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container>
          <Button color="danger"
          onClick={()=> {
            deleteCourse(course.id);
          }}>Delete</Button>
          <Button color="warning" style={{marginLeft:"30px"}}>Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
}

export default Course;
