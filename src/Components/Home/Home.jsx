import React,{useEffect} from "react";

import './Home.css'

import Video from '../../Assets/WhatsApp Video 2023-09-05 at 14.46.58.mp4'
import { AiOutlineSwapRight } from "react-icons/ai";
import img1 from '../../Assets/img2.jpeg'
import img2 from '../../Assets/img3.jpeg'
import img3 from '../../Assets/img4.jpeg'
import img4 from '../../Assets/img5.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () =>
{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);
    return (
        <div className="Home">
            <div className="videoBg">
                <video src={Video}autoPlay muted></video>
            </div>
            <div className="sectionText">
                <h1 data-aos="fade-up">Unlock your dreams with us</h1>
                <p data-aos="fade-up">Discover the world's most adventorous nature,
                    Life is too short for a trip
                </p>
                <button className="btn flex" data-aos="fade-up">
                    Get started <AiOutlineSwapRight
                    className='icon'/>
                </button>
            </div>
            <div className="popularPlaces">
                <div className="content">
                    <h3 data-aos="fade-up">Popular Places</h3>
                     <div className="images flex">
                        <img src={img1} alt=""/>
                        {/*img src="" alt=""*/}
                        {/*img src="" alt=""*/}
                        {/*img src="" alt=""*/}
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Home