import React from 'react'
import Navbar from "../../components/Navbar"
import Card from "../../components/Card"
// import { QueryClientProvider,QueryClient } from 'react-query'
import Link from 'next/link'
import doctor_img from "../../public/doc.jpg"
import Image from 'next/image'
import { useRouter } from 'next/router'
import react from 'react'


// import "../styles/card.css"


function profile(params) {
    const router = useRouter()
    console.log(router.query)


// console.log(id)

    // const cards=Card.map()
    return(
    
        <div className="flex flex-col conte">
        <Navbar />

        <div className="doc-profile">
            <Image src={doctor_img} className="doc-img"/>
            <div className='doc-data'>
                <h1 className='ductur'>Name: {router.query.name}</h1>
                <h1 className='ductor'>Category: {router.query.category}</h1>
                <h1 className='ductor'>Address: {router.query.address}</h1>
                <h1 className='ductor'>Certificate Ipfs link: {router.query.hidden}</h1>
                
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
     
    )
}
export default profile