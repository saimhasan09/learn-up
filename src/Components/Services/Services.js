import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Services = () => {


    const [courses, setCourses] = useState('');

    useEffect(() => {

        fetch('./FakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div>
            <Header></Header>

            <h2 className="text-center fs-1 fw-bolder"> All Courses</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    courses && courses.map(course => <CourseCard course={course} key={course.id}></CourseCard>)
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;