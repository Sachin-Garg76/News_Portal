import Navbar from "./Navbar";
import { FaInfoCircle } from "react-icons/fa";
import {useLocation} from 'react-router-dom';
import React from 'react';
const AboutUs = () => {
    const location = useLocation();
   
    return (
        <>
        {location?.pathname!=='/' && <Navbar/>}
           }

            <div className="row py-2">
                <p className="fs-3 text-center">About Us</p>
                <div className="col-sm-10 mx-auto">
                    <div className="row py-3">
                          <div className="col-sm-6 pt-3">
                            <p>At NBC News, we are committed to delivering trusted, fact-based journalism that empowers, informs, and engages our audiences. For decades, our dedicated team of journalists, producers, and editors has brought viewers and readers breaking news, in-depth investigations, and compelling stories from across the globe. From local communities to international affairs, we strive to cover the stories that matter most, holding power to account and amplifying voices that deserve to be heard.</p>
                           </div>
                        <div className="col-sm-6 ">
                            <img src="/LandingPage/logo.jpg" className="aboutimg" />
                        </div>
                      </div>
                    <div className="row">
                        <div className="col-sm-4 ">
                            <img src="/LandingPage/logo.jpg" className="img-thumbnail w-100 aboutimg" />
                        </div>
                        <div className="col-sm-8 pt-2">
                           <p>s a pioneer in broadcast journalism, NBC News has consistently evolved to meet the changing needs of our audience. Through award-winning reporting, digital innovation, and a relentless commitment to accuracy, we have earned the trust of millions who rely on us every day. Whether you tune in on television, browse our website, or follow us on social media, our mission is to provide timely and transparent reporting that cuts through the noise.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                          <p>Looking forward, NBC News remains dedicated to upholding the highest journalistic standards in an ever-changing media landscape. We embrace new technologies and storytelling methods to connect with audiences wherever they are, while honoring our legacy of credibility and public service. Together with our viewers and readers, we will continue to shine a light on truth, foster meaningful dialogue, and shape a more informed society.</p> 
                        </div>
                    </div>
                    <hr />
                    <div className="row py-3" >
                        <p className="fs-3 text-center">Our Vision <span className="text-mycolor"><b>& mission</b></span></p>
                        <div className="col-sm-12">
                            <p className="text-center">Looking forward, NBC News remains dedicated to upholding the highest journalistic standards in an ever-changing media landscape. We embrace new technologies and storytelling methods to connect with audiences wherever they are, while honoring our legacy of credibility and public service. Together with our viewers and readers, we will continue to shine a light on truth, foster meaningful dialogue, and shape a more informed society.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
