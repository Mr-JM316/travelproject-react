import React from "react";

import './Home.css'

import Video from '../../Assets/WhatsApp Video 2023-09-05 at 14.46.58.mp4'
import { AiOutlineSwapRight } from "react-icons/ai";

const Home = () =>
{
    return (
        <div className="Home">
            <div className="videoBg">
                <video src={Video}autoPlay muted></video>
            </div>
            <div className="sectionText">
                <h1>Unlock your dreams with us</h1>
                <p>Discover the world's most adventorous nature,
                    Life is too short for a trip
                </p>
                <button className="btn flex">
                    Get started <AiOutlineSwapRight
                    className='icon'/>
                </button>
            </div>
            <div className="popularPlaces">
                <div className="content">
                    <h3>Popular Places</h3>
                     <div className="images flex">
                        {/*img src="" alt=""*/}
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