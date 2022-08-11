import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ButtonDropdown } from 'reactstrap';
import AllCourse from './AllCourse';
import AddCourse from './AddCourse';
import Home from './Home';

const rootElem=document.getElementById('root');

const root = ReactDOM.createRoot(rootElem);

root.render(
  // <BrowserRouter>
  // <Routes>
  //   <Route path="/" element={<App />}>
  //     <Route index element={<Home />} />
  //     <Route path="/courses" element={<AllCourse />} />
  //     <Route path='/addCourse' element={<AddCourse />} />
  //   </Route>
  // </Routes>
  // </BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


