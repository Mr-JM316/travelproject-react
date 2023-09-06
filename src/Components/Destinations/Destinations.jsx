import React,{useEffect} from "react";

import './Destinations.css'

import {MdLocationPin} from 'react-icons/md'
import {BsFillCreditCardFill}  from 'react-icons/bs'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import img1 from '../../Assets/image1.jpeg'
import img2 from '../../Assets/img2.jpeg'
import img3 from '../../Assets/img3.jpeg'
import img4 from '../../Assets/img4.jpeg'
import img5 from '../../Assets/img5.jpeg'
import img6 from '../../Assets/img6.jpeg'
import img7 from '../../Assets/img7.jpeg'
import img8 from '../../Assets/img8.jpeg'
import img9 from '../../Assets/img9.jpeg'
import {TiLocation} from 'react-icons/ti'
import Aos from 'aos'
import 'aos/dist/aos.css'
const destinations =[
    {
        id:1,
        img:img1,
        name:'Seychelles Island',
        location:'Indian Ocean',
        rating: 4.7,
    },
    {
        id:2,
        img:img2,
        name:'Seychelles Island',
        location:'Indian Ocean',
        rating: 4.7,
    },
    {
        id:3,
        img:img3,
        name:'Scotland',
        location:'Scotland',
        rating: 4.7,
    },
    {
        id:4,
        img:img4,
        name:'Eiffel Tower',
        location:'Paris',
        rating: 4.7,
    },
    {
        id:5,
        img:img5,
        name:'Amazon forest',
        location:'Amazon forest',
        rating: 4.7,
    },
    {
        id:6,
        img:img6,
        name:'Paris',
        location:'Paris',
        rating: 4.7,
    },
    {
        id:7,
        img:img7,
        name:'Tajmahal',
        location:'India',
        rating: 4.7,
    },
    {
        id:8,
        img:img8,
        name:'Australia',
        location:'Australia',
        rating: 4.7,
    },
    {
        id:9,
        img:img9,
        name:'Waterfall',
        location:'India',
        rating: 4.7,
    },
];
const Deestinations = () =>
{
        useEffect(()=>{
            Aos.init({duration:2000})
        },[]);
    return (
        <div className="destination section container">
            <div className="secContainer">
                <div className="secTitle">
                    <span className="redText" data-aos="fade-up">
                        EXPLORE NOW
                    </span>
                </div>
                    <h3 data-aos="fade-up">Find Your Dream Destination</h3>
                    <p data-aos="fade-up">Fill in the fields below to find the next best 
                        spot for your next tour
                        </p>
                
                <div className="searchField grid">
                    <div className="inputField flex" data-aos="fade-up">
                    <MdLocationPin className='icon'/>
                    <input type="text" placeholder="Location"/>

                    </div>
                    <div className="inputField flex" data-aos="fade-up">
                    <BsFillCreditCardFill className='icon'/>
                    <input type="text" placeholder="Budget"/>
                    
                    </div>
                    <div className="inputField flex" data-aos="fade-up">
                    <BsFillCalendarDateFill className='icon'/>
                    <input type="text" placeholder="Date"/>
                    
                    </div>
                    <button className='btn flex' data-aos="fade-up">
                        <BiSearchAlt className='icon'/>
                        Search 
                   </button>
                </div>
                <div className="secMenu">
                    <ul className="flex" data-aos="fade-up">
                        <li className="active">All</li>
                        <li>Recommended</li>
                        <li>Beach</li>
                        <li>Park</li>
                        <li>Nature</li>
                        <li>Mountain</li>
                        </ul>
                    </div>
                    <div className="destinationContainer grid">
                        {destinations.map(destination =>{
                            return (
                                <div className="singleDestination"key={destination.id}>
                            <div className="imgDiv">
                                <img src={destination.img} alt="Destination Image"/>
                                <div className="descInfo flex" data-aos="fade-up">
                                    <div className="text">
                                        <span className="name">
                                        {destination.name}
                                        </span>
                                        <p className="flex" data-aos="fade-up">
                                            <TiLocation className='icon'/>
                                            {destination.location}
                                        </p>
                                    </div>
                                    <span className="rating">
                                    {destination.rating}
                                    </span>
                                </div>
                            </div>
                        </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        );
}

export default Deestinations