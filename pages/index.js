import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import { DocForm } from '../components/DocForm'


function Home() {
  return (
    <div className='con'>

    <div className='one'>
    <Link href='/doctor/index'>
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