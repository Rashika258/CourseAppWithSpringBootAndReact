import { ToastContainer } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import AddCourse from "./AddCourse";
import AllCourse from "./AllCourse";
import Course from "./Course";
import Home from "./Home";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Course course={{title:"React Course", description:"This is testing"}} /> */}
      {/* <AllCourse />
      <AddCourse /> */}
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Sidebar />
            </Col>

            <Col md={8}>
              {/* <Route index element={<Home />} /> */}
              <Routes>
                {" "}
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/view-courses" element={<AllCourse />} />

                <Route indexpath="/" element={<Home />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
