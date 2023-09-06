import React from "react";

import Aos from 'aos'
import 'aos/dist/aos.css'
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";

const Accordian = ({title,desc,active,setActive}) =>
{
    
    return(
        <div className="accordianContainer">
            <span className={(active===title? 'activeTitle':'')+"title"+"flex"}>
            {title}
            <span onClick={()=>setActive(title)}>
            {active === title?(<BsArrowDownCircle className="icon"/>):
            (<BsArrowUpCircle className="icon"/>)}
            </span>
            </span>
            <p className={(active === title ? "show" : "") +"description"}>
                {desc}
            </p>
        </div>
    )
}

export default Accordian