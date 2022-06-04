import React from 'react'
import Navbar from "../../components/Navbar"
import Card from "../../components/Card"
import Link from 'next/link'
import doctor_img from "../../public/doc.jpg"
import Image from 'next/image'


// import "../styles/card.css"
function profile(params) {
    // const cards=Card.map()
    return(
        <>
        <div className="flex flex-col conte">
        <Navbar />

        <div className="doc-profile">
            <Image src={doctor_img} className="doc-img"/>
            <div className='doc-data'>
                <h1>Name:</h1>
                <h1>Category:</h1>
                <h1>Address:</h1>
                
            </div>
        </div>
               <Link href='/doctor/upload'>
                    <button> Upload Prescription </button>
               </Link>
        
        <div className="render-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>

        </div>
        </>
    )
}
export default profile