import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const About = () => {
    return (

        <div>
            <Header></Header>
            <div className="container row ms-2">
            <img className="img-fluid w-50 col-md-6 " src="https://i.ibb.co/fkw0GFJ/2672292.jpg" alt="contact" border="0"></img>

            <div className="col-md-6">
                <h1 className=" fs-1 fw-bolder">ABOUT US</h1>
                <p> Learn up is a leading educational platform for superior online courses, professional training and corporate eLearning services that help you develop useful skills and accomplish more in life. Our online courses and career-track programs are designed in collaboration with the best of industry experts and organizations in world.</p>

                

            </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default About;