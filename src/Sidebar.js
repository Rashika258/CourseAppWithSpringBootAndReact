import React from 'react'
import { ListGroup} from 'reactstrap';
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <>
    <h1 className="text-center">Menu</h1>
    <ListGroup>
        <Link className='list-group-item list-group-item-action' tag="a" to="/" action>Home</Link>
        <Link className='list-group-item list-group-item-action' tag="a" to="/add-course" action>Add New Course</Link>
        <Link className='list-group-item list-group-item-action' tag="a" to="/view-courses" action>View Courses</Link>
        <Link className='list-group-item list-group-item-action' tag="a" to="/about" action>About</Link>
        <Link className='list-group-item list-group-item-action' tag="a" to="/contact" action>Contact</Link>
    </ListGroup>
    </>
  )
}

export default Sidebar