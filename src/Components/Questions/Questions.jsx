import React,{useState} from "react";

import './Questions.css'
import Accordian from "./Accordian";


const Questions = () =>
{
    
    const[active,setActive] = useState("title2");
    return (
        <div className="questions section container">
            <div className="secHeading">
                <h3>Frequently Asked Questions</h3>
            </div>
            <div className="secContainer grid">
                <div className="accordian grid">
                    <Accordian 
                    title="How do i choose the right travel destination for me?"
                    desc=" Consider your interests,budgets,desired
                    destinations and the type of environent
                    you enjoy.Research your destination that 
                    align with your preferences and attractions
                    or activities you find appealing" 
                    active={active} 
                    setActive={setActive}
                    />
                    <Accordian 
                    title="What are the best time to visit specific destinations?"
                    desc="Research the climate,weather patterns and peak tourist seasons of the destination
                    your interested in.Opt for shoulder seasons when weather is pleasant and the crowds are 
                    fewer,if possible" 
                    active={active} 
                    setActive={setActive}
                    />
                    <Accordian 
                    title="How can i find budget friendly travel options and deals?"
                    desc="Look for travel deals,discounts for flight and accomodations and consider using travel apps or websites
                    that offer competitive prices.Being flexible with your travel deals can also help you find better deals" 
                    active={active} 
                    setActive={setActive}
                    />     
                    <Accordian 
                    title="What essential products should i pack for my adventure?"
                    desc="Pack appropriate clothing,toileteries,travel documents,essential medications and 
                    any specific gear needed for the adventure" 
                    active={active} 
                    setActive={setActive}
                    />             
                     </div>
                <div className="form">
                <div className="secHeading">
                <h4>Do you have any specific questions?</h4>
                <p>
                    Please fill the form below and our
                    dedicated team will be in touch
                </p>
            </div>
            <div className="formContent grid">
                <input type="email" placeholder="Enter email address"/>
                <textarea placeholder="Enter your Questions here"></textarea>
                <button className="btn">Submit Query</button>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Questions