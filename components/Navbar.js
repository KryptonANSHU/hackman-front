import React, { useEffect, useState } from "react";
import Image from 'next/image'
import logo from "../public/logo.jpg"
function Profile(params) {
    const [currentAccount, setCurrentAccount] = useState("");


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
		} else {
			console.log('No authorized account found');
		}
	};
    
    useEffect(() => {
		checkIfWalletIsConnected();
	}, [])
    return(
        
        <div className="navbar">
            <Image src={logo}
            alt="logo"
            width={50}
            height={50} 
            className="logo-img"/>

            <span className="logo-name"> PrescripS </span>

            <div className="connect-wallet">
                {currentAccount?<p> Wallet: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)} </p>:
			<button onClick={connectWallet} className="connect-button">
				Connect Wallet
			</button>
            }
		</div>
            </div>
    )
}
export default Profile