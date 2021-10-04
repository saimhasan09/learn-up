import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div className="container row ms-2">
            <img className="img-fluid w-50 col-md-6 " src="https://i.ibb.co/q0hq524/contact.jpg" alt="contact" border="0"></img>

            <div className="col-md-6 align-items-center">
                <h1 className="fs-1 fw-bolder ">CONTACT US</h1>
                <p> Please feel free and  contact us at</p>

                <h5>{<FontAwesomeIcon icon={faPhone}/>} Phone: +3434343</h5> 
                <h5>{<FontAwesomeIcon icon={faMapMarker}/>} Location: 199 Park Ave, San Jose,
                    CA 95110, </h5>
                <h5>{<FontAwesomeIcon icon={faEnvelopeSquare}/>} Email:support@mail.com</h5>

            </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;