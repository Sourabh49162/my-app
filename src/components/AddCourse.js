import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import base_url from "../api/DjangoRestApiforCourses";


const AddCourse = () => {

    const [course, setCourse] = useState();

    const postCourseData = data => {
        axios.post(`${base_url}/courses/`, data).then(
            response => {
                toast.success("Course Added Successfully");
            },
            error => {
                toast.error("Something Went Wrong")
            }
        );
    };

    const addCourse = e => {
        postCourseData(course);
        e.preventDefault();
        e.target.reset();
    }


    useEffect(() => {
        document.title = "Add Course"
    }, []);
    return (
        <Container>
            <h1 className="my-3">Add Course</h1>
            <Form onSubmit={addCourse}>
                <FormGroup>
                    <Label for="courseCode" className="font-weight-bold">Course Code</Label>
                    <Input type="text" placeholder="Enter Course Code Here" id="courseCode" onChange={e => setCourse({ ...course, code: e.target.value })} name="courseCode" />
                </FormGroup>
                <FormGroup>
                    <Label for="courseTitle" className="font-weight-bold">Course Title</Label>
                    <Input type="text" placeholder="Enter Course Title Here" id="courseTitle" onChange={e => setCourse({ ...course, title: e.target.value })} name="courseTitle" />
                </FormGroup>
                <FormGroup>
                    <Label for="courseDescription" className="font-weight-bold">Course Description</Label>
                    <Input type="textarea" placeholder="Enter Course Description Here" onChange={e => setCourse({ ...course, description: e.target.value })} id="courseDescription" name="courseDescription" rows="5" />
                </FormGroup>
                <Container>
                    <Button type="submit" color="success mr-3">Add Course</Button>
                    <Button type="reset" color="warning">Clear</Button>
                </Container>

            </Form>
        </Container>
    );
};


export default AddCourse;