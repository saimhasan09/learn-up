import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import SubHeader from '../SubHeader/SubHeader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {

    const [courses, setCourses] = useState('');

    useEffect(() => {

        fetch('./FakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0, 6)))
    }, []);


    return (
        <div >
            <Header></Header>
            <SubHeader></SubHeader>

                <h1 className="text-center fs-1 fw-bolder">Popular Courses</h1>

                <div className="d-flex flex-wrap justify-content-center" >

                    {
                        courses && courses.map(course => <CourseCard course={course} key={course.id}></CourseCard>)
                    }

                </div>
                    <Footer></Footer>
        </div>
    );
};

export default Home;