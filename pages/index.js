import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useState,useEffect} from 'react'

import { DocForm } from '../components/DocForm'


function Home() {
  
  const [currentAccount, setCurrentAccount] = useState("");
  const [connected, setConnected] = useState(false)

  useEffect(() => {
		checkIfWalletIsConnected();
	}, [currentAccount])

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



    const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				alert("Get MetaMask -> https://metamask.io/");
				return;
			}

			// Fancy method to request access to account.
			const accounts = await ethereum.request({ method: "eth_requestAccounts" });

			// Boom! This should print out public address once we authorize Metamask.
			console.log("Connected", accounts[0]);
			setCurrentAccount(accounts[0]);
      setConnected(true);
		} catch (error) {
			console.log(error)
		}
	}
    const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			console.log('Make sure you have metamask!');
			return;
		} else {
			console.log('We have the ethereum object', ethereum);
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' });

		if (accounts.length !== 0) {
			const account = accounts[0];
			console.log('Found an authorized account:', account);
			setCurrentAccount(account);
      // return(
      //   <div>
      //     <div className="wallet-connect">
      //       <button onClick={connectWallet}>Connect your wallet</button>
      //     </div>
      //   </div>
      // )
		} else {
			console.log('No authorized account found');
		}
	};
    

 


  return (
<<<<<<< HEAD
    <div>
      {!connected?
      <div className="flex h-screen justify-center align-center">
          <button className="" onClick={connectWallet}>Connect your wallet</button>
        
      </div>
      :
      <div className='outer' >
        <div className='left' onMouseEnter={func1} onMouseLeave={func2}>
        <a>
          <DocForm />
        </a>
        </div>
      <div className='right' onMouseEnter={func3} onMouseLeave={func4}>
        <Link href="/patient/">
        <a> I am a Patient </a>
        </Link>
      </div>
      
=======
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
    
>>>>>>> 6a72c5b2a8a78025f4fab855120617f82bbf3ae7
  
      </div>
}
    </div>
  )
}

export default Home;