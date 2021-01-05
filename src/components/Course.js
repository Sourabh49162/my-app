import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Container,
    Button
} from "reactstrap";
import base_url from "../api/DjangoRestApiforCourses";


const Course = ({ course, update }) => {
    const deleteCourse = id => {
        axios.delete(`${base_url}/courses/${id}/`).then(
            response => {
                update(id);
                toast.success("Course Deleted Successfully")
            },
            error => {
                toast.error("Something Went Wrong")
            }
        );
    }
    return (
        <Card className="text-center">
            <CardBody>
                <CardTitle className="font-weight-bold">{course.title}</CardTitle>
                <CardText>{course.description}</CardText>
                <Container>
                    <Button color="warning">Update</Button>
                    <Button color="danger ml-3" onClick={() => deleteCourse(course.id)}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
    );
};


export default Course;