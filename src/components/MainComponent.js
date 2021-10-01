import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './other/HeaderComponent';
import { LandingPage } from './pages/LandingComponent';
import { ethers } from 'ethers';
import Home from './pages/HomeComponent';
import { About } from './pages/AboutComponent';

const CONTRACT_ABI = ''
const CONTRACT_ADDRESS = ''

const Main = () => {

    const [currentAccount, setCurrentAccount] = useState('');


    //check if the user has a connected wallet / account
    const checkIfWalletIsConnected = async () => {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: 'eth_accounts' })

        if (accounts.length !== 0) {
            const account = accounts[0];
            setCurrentAccount(account);
            //need later for minting
            //setupEventListener();
        } else {
            alert("No account found - please connect")
        }
    }


    //connect a wallet if you don't already have 1 connected
    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert("Get metamask!");
                return;
            }

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });

            setCurrentAccount(accounts[0]);
            setupEventListener();


        } catch (error) {
            console.log(error)
        }
    }

    const setupEventListener = () => {
        try {
            const { ethereum } = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

                connectedContract.on("NewPassMinted", (from, tokenId) => {
                    console.log(from, tokenId.toNumber());
                    alert(`Hey there! We've minted your Pass and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`)
                });

                console.log("Setup event listener!");
            } else {
                console.log("Ethereum object doesn't exist");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/' render={() => <LandingPage user={currentAccount} connectWallet={connectWallet()} />} />
                <Route path='/home' component={Home} />
                <Route path='/about' component={About} />
                <Redirect to='/' />
            </Switch>
        </>
    )
}
export default Main;