import React from 'react'
import {useEffect} from 'react'
import {ethers} from 'ethers'
import Navbar from "../../components/Navbar"
import Card from "../../components/Card"

import Link from 'next/link'
import doctor_img from "../../public/doc.jpg"
import Image from 'next/image'
import { useRouter } from 'next/router'
import react from 'react'
import Hackman from './Hackman.json'

// import "../styles/card.css"


function profile(params) {
    const router = useRouter()
    console.log(router.query)
    const contractAddress="0xab70eB5255f74Ebe0fb5A4Cb9b293B78e0070125"
  
    useEffect(() => {
        castSignature()
    },[])

    const castSignature = async () => {
        const { ethereum } = window
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum)
          const prescripContract = provider.getSigner()
          const contract = new ethers.Contract(
            contractAddress,
            Hackman.abi,
            prescripContract
          )
          const data = contract.getAllSigners()
          await data
          data.then((value) => {
            console.log(value)
            // setTxHash(value.hash)
            // setGotTxn(true);
          })
        }
      }


// console.log(id)

    // const cards=Card.map()
    return(
    
        <div className="flex flex-col conte">
        <Navbar />

        <Link href='/doctor/upload'>
                    <button className='btn'> Upload Prescription </button>
               </Link>

        <div className="doc-profile">
            <Image src={doctor_img} className="doc-img"/>
            <div className='doc-data'>
                <h1 >Name: {router.query.name}</h1>
                <h1 >Category: {router.query.category}</h1>
                <h1 >Address: {router.query.address}</h1>
                <h1 >Certificate Ipfs link: {router.query.hidden}</h1>
            </div>
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
     
    )
}
export default profile