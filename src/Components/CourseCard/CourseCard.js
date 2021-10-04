import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'
import './CourseCard.css';
import Rating from 'react-rating';

const CourseCard = (props) => {

    const { img, name, Instructor, rating, duration, price } = props.course;

    return (

        <div className='m-5 '>

            <Card className="  border border-color shadow  bg-body rounded" style={{ width: '18rem' }}>
                <Card.Img variant="top p-2 " src={img} />

                <Card.Body>

                    <Card.Title className="fw-bold fs-3">{name}</Card.Title>
                    <p> {<FontAwesomeIcon icon={faUser} />} Instructor: {Instructor}</p>

                    <Row className="my-3">
                       
                        <Col md> <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            
                            readonly
                        /></Col>
                        <Col md> {<FontAwesomeIcon icon={faClock} />} {duration}</Col>
                    </Row>
                    <Row>
                        <Col md><h4>${price}</h4></Col>
                        <Col md><button type="button" class="btn btn-outline-secondary">Learn more</button>
                        </Col>

                    </Row>

                </Card.Body>

            </Card>
        </div>


    );
};

export default CourseCard;