import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Doctor from './doctor.js'
import Patient from './patient'
import { DocForm } from '../components/DocForm'


function Home() {
  return (
    <div className='con'>

    <div className='one'>
    <Link href='/doctor'>
      <a>I am A doctor</a>
    </Link>
      <DocForm />
    </div>

    <div className='two'>
    <Link href='/patient'>
      <a>I am a  Patient</a>
    </Link>
  
    </div>
    
    </div>
  )
}

export default Home;