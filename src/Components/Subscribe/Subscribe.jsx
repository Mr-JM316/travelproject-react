import React,{useEffect} from "react";

import './Subscribe.css'
import image from '../../Assets/lc.jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribe = () =>
{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);
    return (
        <div className="subscribe section container">
            <div className="sectionContainer grid">
                <img src={image} alt="DivImage" data-aos="fade-up"/>
                <div classname="textDiv">
                    <h4 data-aos="fade-up">Best way to start our journey</h4>
                    <p data-aos="fade-up">
                        We offer personalized iterations tailored
                        to individual preferences and interests.
                    </p>
                    <button classname="btn">
                        Start Here
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe