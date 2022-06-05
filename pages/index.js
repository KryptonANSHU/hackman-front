import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import { DocForm } from '../components/DocForm'


function Home() {

  function func1(e){
    e.currentTarget.parentElement.classList.add('hover-left')

  }
  
  
  function func2(e){
    e.currentTarget.parentElement.classList.remove('hover-left')
  }
  
  function func3(e){
    e.currentTarget.parentElement.classList.add('hover-right')
  
  }
  function func4(e){
    e.currentTarget.parentElement.classList.remove('hover-right')
   
  }
 


  return (
    <div className='outer' >

    <div className='left' onMouseEnter={func1} onMouseLeave={func2}>
    <a>

      <DocForm />
    </a>
    </div>

    <div className='right' onMouseEnter={func3} onMouseLeave={func4}>
      <Link href="/patient">
      <a> I am a Patient </a>
      </Link>
    
  
    </div>
    
    </div>
  )
}

export default Home;