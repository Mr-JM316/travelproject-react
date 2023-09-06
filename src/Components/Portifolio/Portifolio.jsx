import React,{useEffect} from "react";
import Image from '../../Assets/lc.jpeg'

import './Portifolio.css'
import icon1 from "../../Assets/icon1.jpeg"
import icon2 from "../../Assets/icon2.jpeg"
import icon3 from "../../Assets/icon3.jpeg"
import Aos from 'aos'
import 'aos/dist/aos.css'
const Portifolio = () =>
{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className="portfolio section container">
            <div className="secContainer grid">
                <div className="leftContent">
                    <div className="secHeading">
                        <h3 data-aos="fade-up">Why Should you Choose Us</h3>
                        <p data-aos="fade-up">
                            We have an extensive knowledge and experience in the industry
                        </p>
                        </div>
                        <div className="grid">
                            <div className="singlePortifolio flex">
                                <div className="iconDiv">
                                    <img src={icon1} alt="icon image"/>
                                </div>
                                <div className="infor" data-aos="fade-up">
                                    <h3 data-aos="fade-up">Safety and Support</h3>
                                    <p data-aos="fade-up">
                                        Our priority is the safety and well-being of our clients.
                                        We maintain high safety standards and have emergency Support available
                                        During the trip
                                    </p>
                                </div>
                            </div>
                            <div className="singlePortifolio flex" data-aos="fade-up">
                                <div className="iconDiv">
                                    <img src={icon2} alt="icon image"/>
                                </div>
                                <div className="infor" data-aos="fade-up">
                                    <h3>Diverse Range of Destinations</h3>
                                    <p>
                                      Whether its a domestic tour or international adventure,
                                      We provide wide range of destination to catter to different
                                      interest and preferences
                                    </p>
                                </div>
                            </div>
                            <div className="singlePortifolio flex">
                                <div className="iconDiv">
                                    <img src={icon3} alt="icon image"/>
                                </div>
                                <div className="infor" data-aos="fade-up">
                                    <h3>24/7 Customer Support</h3>
                                    <p>
                                        Our Dedicated customer support team is available
                                        round the clock to address any queries or concerns 
                                        before,during or after the trip
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>

            </div>
        </div>
    )
}

export default Portifolio