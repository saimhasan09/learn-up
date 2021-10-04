import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';

const Services = () => {


    const [courses, setCourses] = useState('');

    useEffect(() => {

        fetch('./FakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div>
            <h2 className="text-center fs-1 fw-bolder"> All Courses</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    courses && courses.map(course => <CourseCard course={course} key={course.id}></CourseCard>)
                }

            </div>
        </div>
    );
};

export default Services;