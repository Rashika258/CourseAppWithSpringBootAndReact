import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import base_url from "./api/bootApi";
import Course from "./Course";


function AllCourse() {
  useEffect(() => {
    // alert("Testing");
    document.title = "All Courses";
  }, []);

  // function to call server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        // success
        console.log(response);
        console.log(response.data);
        toast.success("courses has been loaded");
        setCourses(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  // deleting the course
const updateCourses=(id)=> {
  setCourses(courses.filter((c) => c.id != id))
}


  // const [courses, setCourses] = useState([
  //   { title: "Java Course", description: "This is demo java" },
  //   { title: "Django Course", description: "This is demo django" },
  //   { title: "Reactjs Course", description: "This is demo reactjs" },
  // ]);

  const [courses, setCourses]=useState([]);

  return (
    <>
      {/* <Button
        onClick={() => {
          console.log("Button Clicked");
          courses.push({
            title: "Reactjs Course",
            description: "This is demo reactjs",
          });
          // setCourses(courses);
          setCourses([
            ...courses,
            {
              title: "Angular Course",
              description: "this is a demo course",
            },
          ]);
        }}
      >
        {" "}
        Test
      </Button> */}
      <h1 className="text-center">All Courses</h1>
      {courses.length > 0 ? (
        courses.map((item) => <Course key={item.id} update={updateCourses} course={item} />)
      ) : (
        <p>No courses</p>
      )}
    </>
  );
}

export default AllCourse;
