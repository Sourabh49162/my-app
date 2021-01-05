import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "./../api/DjangoRestApiforCourses";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {

    const getCoursesData = () => {
        axios.get(`${base_url}/courses/`, {"contentType":"application/json"}).then((response) => {
            setCourses(response.data);
            toast.success("Data Loaded from API");
        },
            (error) => {
                toast.error("Something Went Wrong");
            });
    };

    const updateCourse = id => {
        setCourses(courses.filter(course => course.id !== id));
    };

    useEffect(() => {
        document.title = "All Courses";
        getCoursesData();
    }, []);
    const [courses, setCourses] = useState([
        // {title:"Django", description:"Python framework for web development"},
        // {title:"Spring Boot", description:"Java framework for web development"},
        // {title:"Laravel", description:"PHP framework for web development"},
        // {title:"React JS", description:"JavaScript framework for web development"}
    ]);

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of Courses are :</p>
            {
                courses.length > 0 ? courses.map(item => <Course key={item.id} course={item} update={updateCourse} />) : "No Any Course Available right now. Please Check after sometime."
            }
        </div>
    );
};


export default AllCourses;