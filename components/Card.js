import React from 'react'
import Image from 'next/image'
import logo from "../public/pre.jpg"
import {FaStar} from 'react-icons/fa'

function Card(){
    return(
        <div>
            <div className="doc-card">

                <div className="doc-card-img">
            
                <Image src={logo}
            alt="logo"
            className="doc-logo-img"/>

            <div className="doc-rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            
            </div>

                </div>
            <div className="doc-doctor-problem">
                I have treated so and so. I have treated so and so. I have treated so and so. I have treated so and so. I have treated so and so. 
                </div>
            </div>
        </div>
    )
}
export default Card