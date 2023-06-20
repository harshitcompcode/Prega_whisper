import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaClock, FaHome, FaHospitalUser, FaMedkit, FaShuttleVan, FaUserCheck, FaUserMd } from 'react-icons/fa';

const Aboutus = () => {
    const style = { width: '50px', height: '50px', margin: '20px' };
    return (
        <Container>
            <div className='bg-primary text-white p-5 mb-5 rounded mt-5'>
                <h4 className='rounded'>Prega Whisper</h4>
                <h1 className='border-bottom pb-4'>Community</h1>
            </div>
            <Row style={{ textAlign: 'left' }} className='my-5'>
                <Col>
                    <p>
                    </p>
                    <div>
                        <ol>
                            <li><h3>Helping hands to Women</h3></li>
                            <li><h3>Aid to Midwifery</h3></li>
                            <li><h3>Connecting doctors, midwifery and enthusiasts together</h3></li>
                            <li><h3>Empower India</h3></li>
                        </ol>
                    </div>
                </Col>
            </Row>

            <h2 className='bg-success p-4 text-white rounded'>Why Join us?</h2>
            <Row xs={1} md={2} className='text-white g-4'>
                <Col className='rounded'>
                    <Card className='bg-primary'>
                        <Card.Body>
                            <h2>01</h2>
                            <h4>Helping hands to Women</h4>
                           
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='rounded'>
                    <Card className='bg-primary'>
                        <Card.Body>
                            <h2>02</h2>
                            <h4>Aid to Midwifery</h4>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='rounded'>
                    <Card className='bg-primary'>
                        <Card.Body>
                            <h2>03</h2>
                            <h4>Connecting individuals together</h4>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='rounded'>
                    <Card className='bg-primary'>
                        <Card.Body>
                            <h2>04</h2>
                            <h4>Empower India</h4>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row xs={1} md={1} lg={3} className='text-white py-5'>
                <Col className='bg-success p-3 rounded'>
                    <FaShuttleVan style={style} />
                    <h2>Emergency 24/7</h2>
                    <div>
                        <p>We are ready to serve</p>
                        
                    </div>
                </Col>
                <Col className='bg-primary p-3 rounded'>
                    <FaUserMd style={style} />
                    <h2>Events</h2>
                    <div>
                        
                        <p>Join Us On Events</p>
                        <p>Sunday & Holidays: 09:00 - 15:00</p>
                    </div>
                </Col>
                <Col className='bg-success p-3 rounded'>
                    <FaClock style={style} />
                    <h2>Any Queries</h2>
                    <div>
                
                        
                        <p>Feel free to reach out </p>
                        <p>+91-8102031686 </p>
                    </div>
                </Col>
            </Row>

            <Row className='bg-light rounded mb-5 p-5'>
                <Col>
                    <h2 className='text-success'>Our Midwifery says</h2>
                    <FaUserCheck style={style} />
                    <h5>Sheetal Thakur</h5>
                    <small>Patient</small>
                    <p>It was more than a gift , this female came in somehow and saved my child and should mention the guy as well for his wonerful assitance to her. India is changing and PregaWishper has been one of  the pionner</p>
                    <div className='d-flex justify-content-evenly'>
                        <Button>Prev</Button>
                        <Button>Next</Button>
                    </div>
                </Col>
            </Row>

            <Row xs={2} md={4} className='g-4 mb-5'>
                <Col>
                    <Card className='shadow'>
                        <FaHospitalUser style={style} className='mx-auto' />
                        <h2>350</h2>
                        <h6>Qualified Staff</h6>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow'>
                        <FaUserCheck style={style} className='mx-auto' />
                        <h2>70520</h2>
                        <h6>Patients Attended</h6>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow'>
                        <FaMedkit style={style} className='mx-auto' />
                        <h2>7526</h2>
                        <h6>Insured</h6>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow'>
                        <FaHome style={style} className='mx-auto' />
                        <h2>550</h2>
                        <h6>Hospital Rooms</h6>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Aboutus;