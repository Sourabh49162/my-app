import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom"

const Menus = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/">Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course">Add Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses">View Courses</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/about">About</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/contact">Contact</Link>
        </ListGroup>
    );
};


export default Menus;