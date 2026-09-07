import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const AboutUs = () => {
    const location = useLocation();

    return (
        <>
            {location?.pathname !== '/' && <Navbar />}

            <div className="container-fluid py-4">

                {/* Page Heading */}
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h2 className="fw-bold">
                            About <span className="text-mycolor">Us</span>
                        </h2>
                        <p className="text-muted mb-0">
                            Know more about our platform, mission and vision.
                        </p>
                    </div>
                </div>

                {/* First Section */}
                <div className="row align-items-center mb-4">

                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="p-3">
                            <h4 className="fw-bold mb-3">
                                About NBC News
                            </h4>

                            <p className="text-justify">
                                At NBC News, we are committed to delivering trusted,
                                fact-based journalism that empowers, informs, and
                                engages our audiences. For decades, our dedicated team
                                of journalists, producers, and editors has brought
                                viewers and readers breaking news, in-depth
                                investigations, and compelling stories from across
                                the globe.
                            </p>

                            <p className="text-justify">
                                From local communities to international affairs,
                                we strive to cover the stories that matter most,
                                holding power to account and amplifying voices
                                that deserve to be heard.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
                        <img
                            src="/LandingPage/logo.jpg"
                            className="img-fluid rounded shadow aboutimg"
                            alt="NBC News"
                        />
                    </div>

                </div>

                {/* Second Section */}
                <div className="row align-items-center mb-4">

                    <div className="col-md-4 mb-3 mb-md-0">
                        <img
                            src="/LandingPage/logo.jpg"
                            className="img-fluid img-thumbnail w-100 aboutimg"
                            alt="NBC News"
                        />
                    </div>

                    <div className="col-md-8">
                        <h4 className="fw-bold mb-3">
                            Our Commitment
                        </h4>

                        <p className="text-justify">
                            As a pioneer in broadcast journalism, NBC News has
                            consistently evolved to meet the changing needs of
                            our audience. Through award-winning reporting,
                            digital innovation, and a relentless commitment
                            to accuracy, we have earned the trust of millions
                            who rely on us every day.
                        </p>

                        <p className="text-justify">
                            Whether you tune in on television, browse our
                            website, or follow us on social media, our mission
                            is to provide timely and transparent reporting
                            that cuts through the noise.
                        </p>
                    </div>

                </div>

                {/* Third Section */}
                <div className="row mb-4">
                    <div className="col-12">
                        <p className="text-justify">
                            Looking forward, NBC News remains dedicated to
                            upholding the highest journalistic standards in an
                            ever-changing media landscape. We embrace new
                            technologies and storytelling methods to connect
                            with audiences wherever they are, while honoring
                            our legacy of credibility and public service.
                            Together with our viewers and readers, we will
                            continue to shine a light on truth, foster
                            meaningful dialogue, and shape a more informed
                            society.
                        </p>
                    </div>
                </div>

                <hr />

                {/* Vision & Mission */}
                <div className="row py-4">

                    <div className="col-12 text-center">
                        <h3 className="fw-bold mb-3">
                            Our Vision <span className="text-mycolor">&amp; Mission</span>
                        </h3>

                        <p className="text-center">
                            Looking forward, NBC News remains dedicated to
                            upholding the highest journalistic standards in an
                            ever-changing media landscape. We embrace new
                            technologies and storytelling methods to connect
                            with audiences wherever they are, while honoring
                            our legacy of credibility and public service.
                            Together with our viewers and readers, we will
                            continue to shine a light on truth, foster
                            meaningful dialogue, and shape a more informed
                            society.
                        </p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default AboutUs;
