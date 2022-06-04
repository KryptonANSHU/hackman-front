import React from 'react'
import Image from 'next/image'
import logo from "../public/pre.jpg"
import {FaStar} from 'react-icons/fa'

function Card(){
    return(
        <div>
            <div className="card">

                <div className="card-img">
            
                <Image src={logo}
            alt="logo"
            className="logo-img"/>

            <div className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            
            </div>

                </div>
            <div className="doctor-problem">
                I have treated so and so. I have treated so and so. I have treated so and so. I have treated so and so. I have treated so and so. 
                </div>
            </div>
        </div>
    )
}
export default Card