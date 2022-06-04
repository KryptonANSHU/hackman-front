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
        <div className="flex flex-col">
        <Navbar />

        <div className="doc-profile">
            <Image src={doctor_img} className="doc-img"/>
            <Link href='/doctor/upload'>
            <button> Upload Prescription </button>
    </Link>
        
        </div>
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