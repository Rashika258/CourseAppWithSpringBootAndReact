import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Container} from "reactstrap";
import base_url from "./api/bootApi";

const AddCourse = () => {

  useEffect(() => {
    document.title="Add Course"
  }, [])

  const [course, setCourse]=useState({});

  // Form Handler function
  const handleForm=(e)=>{
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  }

  // creating function to post data on server

  const postDataToServer=(data)=> {
    axios.post(`${base_url}/courses`,data).then(
      (response)=>{
        console.log(response);
        console.log("Success");
        toast.success("Course added successfully");
        setCourse({id:"", title:"",description:""});
      },
      (error) => {
        console.log(error);
        console.log("Error");
        toast.error("Something went wrong")
      }
    )
  }

  return (
    <>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label for="userid">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userid"
            id="userid"
            onChange={(e)=>{
              setCourse({...course, id:e.target.value})
            }}
          />
        </FormGroup>

        <FormGroup>
          <label for="title">Course Title</label>
          <Input type="text" placeholder="Enter title here" id="title"
          onChange={(e)=>{
            setCourse({...course, title:e.target.value});
          }}
          />
        </FormGroup>

        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 150 }}
            onChange={(e)=>{
              setCourse({...course, description:e.target.value});
            }}
          ></Input>
        </FormGroup>

        <Container className="text-center">
          <Button color="success">Add Course</Button>
          <Button type="button" color="warning ml-2" onClick={(e)=>{
            setCourse({});
          } }>Clear</Button>
        </Container>
      </Form>
    </>
  );
};

export default AddCourse;
