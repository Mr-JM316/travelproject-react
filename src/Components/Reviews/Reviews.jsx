import React from "react";

import { AiFillStar } from "react-icons/ai";
import './Reviews.css'

import image5 from '../../Assets/image5.jpeg'
import image2 from '../../Assets/userimage2.jpeg'
import image3 from '../../Assets/userimage3.jpeg'
import image4 from '../../Assets/userimage4.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Reviews = () =>
{
    
    return (
        <div className="review section container">
            <div className="secContainer grid">
                <div className="textDiv">
                    <span className="redText">
                        FROM OUR CLIENTS
                    </span>
                    <h3>Real time History from our beloved client</h3>
                    <p> 
                        By choosing us as their tour agency,
                        customers can expect an enriching and enjoyable
                        travel experience,
                        filled with unforgettable memories that will last a
                        lifetime
                    </p>
                    <span className="stars flex">
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    </span>
                    <div className="clientsImages flex">
                        {/*<img src=""alt="Client Image"/>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews