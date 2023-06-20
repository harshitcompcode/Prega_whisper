import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel, Row, Container, Col, Button, Card, Image } from 'react-bootstrap';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import banner1 from '../../media/banner/5330589.png'
import banner2 from '../../media/banner/5330591.png'
import banner3 from '../../media/banner/5570418.png'
import Services from '../Services/Services';
import testImg1 from '../../media/testimonial/speaker2.jpg';
import testImg2 from '../../media/testimonial/speaker10.jpg';
import testImg3 from '../../media/testimonial/pexels-photo-4173251.jpeg';
import testImg4 from '../../media/testimonial/pexels-photo-4173239.jpeg';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='home'>
            <Carousel fade>
                <Carousel.Item>
                    <img style={{ height: '100vh' }}
                        className="d-block w-100"
                        src={banner3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '100vh' }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '100vh' }}
                        className="d-block w-100"
                        src={banner1}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            {/* services */}
            <Container id='services' className='my-5'>
                <div className='mb-5 bg-primary p-5 text-white rounded'>
                    <h2>Who we are?</h2>
                    <h5 className='border-bottom'>Can community can solve together?</h5>
                    <p><h4>A community network for midwifery,volunteers, doctors and every other hand who is ready to serve.</h4><span class="header23"></span>
                    </p>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4 mb-5 my-3">
                    {
                        services.map(service => <Services service={service} key={service.id}></Services>)
                    }
                </Row>

                {/* --------------your doctor------------ */}
                <div className='mb-5 bg-primary p-5 text-white rounded'>
                    <h2>Your Doctor</h2>
                    <h5 className='border-bottom'>Your Treatment</h5>
                    <p>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital collaboration</p>
                </div>
                <Row xs={1} md={2} lg={4} className='' >

                    <Col>
                        <div className='shadow p-5 rounded bg-success text-white card-hover'>
                            <h2>Great staff</h2>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                            <Button variant='primary'>Read More <FaArrowAltCircleRight /></Button>
                        </div>
                    </Col>
                    <Col>
                        <div className='shadow p-5 my-5 rounded bg-primary text-white card-hover'>
                            <h2>Affordable</h2>
                            <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance to maximise offline indicators.</p>
                            <Button variant='success'>Read More <FaArrowAltCircleRight /></Button>
                        </div>
                    </Col>
                    <Col>
                        <Card className='shadow p-5 rounded bg-success text-white card-hover'>
                            <h2>Great facilities</h2>
                            <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.</p>
                            <Button>Read More <FaArrowAltCircleRight /></Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow p-5 my-5 rounded bg-primary text-white card-hover'>
                            <h2>Consult us</h2>
                            <p>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.</p>
                            //<Button variant='success'>Read More <FaArrowAltCircleRight /></Button>
                        </Card>
                    </Col>
                </Row>

                {/*-----------testimonials------------*/}
                {/* <div className='mb-5 bg-primary p-5 text-white rounded'>
                    <h2>CLIENT</h2>
                    <h5 className='border-bottom'>TESTIMONIALS</h5>
                    <p>The best reference is a good word</p>
                </div>
                <Row md={2} xs={1}>
                    <Col>
                        <Card className='card-hover'>
                            <Card.Title><Image src={testImg1} className='img-fluid' />
                                <h4 className='mt-4'>PAUL LEE</h4></Card.Title>
                            <Card.Body>
                                <p>Nullam eleifend lectus a tortor interdum, non sodales ante vehicula. Proin consequat, at commodo. Donec eros massa, gravida ac lectus et, pharetra interdum lectus. Sed vel scelerisque quam, id fringilla ante. Vivamus sagittis velit quis dictum ultricies. Quisque posuere rhoncus erat, sit amet aliquet augue.</p>
                            </Card.Body>
                        </Card>
                    </Col> */}
                    {/* <Col>
                        <Card className='card-hover'>
                            <Card.Title><Image src={testImg2} className='img-fluid' />
                                <h4 className='mt-4'>ANN CLARK</h4></Card.Title>
                            <Card.Body>
                                <p>Quisque posuere rhoncus erat, sit amet aliquet augue. Donec eros massa, gravida ac lectus et, pharetra interdum lectus. Sed vel scelerisque quam, id fringilla ante. Vivamus sagittis velit quis dictum ultricies. Nullam eleifend lectus a tortor interdum, non sodales ante vehicula. Proin consequat, at commodo.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5'>
                        <Card className='card-hover'>
                            <Card.Title><Image src={testImg4} className='img-fluid' />
                                <h4 className='mt-4'>LEE PAUL</h4></Card.Title>
                            <Card.Body>
                                <p>Vivamus sagittis velit quis dictum ultricies. Quisque posuere rhoncus erat, sit amet aliquet augue. Nullam eleifend lectus a tortor interdum, non sodales ante vehicula. Proin consequat, at commodo. Donec eros massa, gravida ac lectus et, pharetra interdum lectus. Sed vel scelerisque quam, id fringilla ante.</p>
                            </Card.Body>
                        </Card>
                    </Col> */}
                    {/* <Col className='mt-5'>
                        <Card className='card-hover'>
                            <Card.Title><Image src={testImg3} className='img-fluid' />
                                <h4 className='mt-4'>CLARK ANN</h4></Card.Title>
                            <Card.Body>
                                <p>Sed vel scelerisque quam, id fringilla ante. Vivamus sagittis velit quis dictum ultricies. Nullam eleifend lectus a tortor interdum, non sodales ante vehicula. Proin consequat, at commodo.Quisque posuere rhoncus erat, sit amet aliquet augue. Donec eros massa, gravida ac lectus et, pharetra interdum lectus.</p>
                            </Card.Body>
                        </Card>
                    </Col> */}
                {/* </Row> */}


                <div className='mb-5 bg-primary p-5 text-white rounded'>
                    <h2>CLIENT</h2>
                    <h5 className='border-bottom'>TESTIMONIALS</h5>
                    <p>The best reference is a good word</p>
                </div>
                <Row md={2} xs={1}>
                    <Col>
                        <Card className='card-hover'>
                            <Card.Title><Image src={testImg1} className='img-fluid' />
                                <h4 className='mt-4'>Dr A.K Mehra</h4></Card.Title>
                            <Card.Body>
                                <p>Dr. A.K Mehra is a highly skilled gynecologist with over 15 years of experience. He completed his medical degree at Oxford Medical School and pursued her residency in Obstetrics and Gynecology at NYC  Hospital. He is dedicated to women's health and offers comprehensive gynecological care, including routine check-ups, screenings, contraceptive counseling, and management of gynecological conditions. His compassionate approach and emphasis on patient education make his a trusted healthcare provider among women of all ages.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card-hover'>
                            <Card.Title><Image src={testImg2} className='img-fluid' />
                                <h4 className='mt-4'>Dr Geetanjali</h4></Card.Title>

                <Card.Body>
                                <p>Dr Geetanjali is a board-certified obstetrician and gynecologist specializing in reproductive health and fertility. She earned her medical degree from Delhi University and completed her residency at Deen Dayal  Medical Center. Dr Geetanjali has extensive experience in assisting couples with fertility concerns, offering personalized treatment plans and guidance throughout the journey to parenthood. She is committed to providing compassionate and evidence-based care, ensuring her patients feel supported and informed during each step of the process..</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5'>
                        <Card className='card-hover'>
                            <Card.Title><Image src={testImg4} className='img-fluid' />
                                <h4 className='mt-4'>DR Ashu</h4></Card.Title>
                            <Card.Body>
                                <p>Dr. Ashu is a respected gynecologic oncologist with a focus on diagnosing and treating gynecological cancers. He completed his medical degree at Pune Medical School and pursued additional specialized training in gynecologic oncology during her fellowship at Mahavir Cancer Center. His expertise lies in surgical interventions, chemotherapy, and targeted therapies for gynecological cancers. He is passionate about delivering personalized care and supporting his patients through their cancer journey, collaborating closely with a multidisciplinary team to provide the best possible outcomes.</p>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5'>
                        <Card className='card-hover'>
                            <Card.Title><Image src={testImg3} className='img-fluid' />
                                <h4 className='mt-4'>Dr Harshita</h4></Card.Title>
                            <Card.Body>
                                <p>Dr.Harshita is a dedicated gynecologist specializing in minimally invasive gynecologic surgery. She obtained her medical degree from Punjab University and completed her residency at Gurunanak Women's Hospital. He focuses on providing advanced surgical techniques for conditions such as endometriosis, fibroids, and pelvic floor disorders. With her compassionate approach and commitment to patient comfort, she strives to enhance women's quality of life through individualized treatment plans and comprehensive gynecological care.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Home;