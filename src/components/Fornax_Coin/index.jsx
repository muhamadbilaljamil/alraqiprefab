import React, {useState} from 'react';
import './Fornax_Coin.css'
import '../Why_Choose_FRX/Why_Choose_FRX.css'
import logo from '../../assets/images/main-banner-logo.svg';
import Day_Counter from "../Day_Counter";
import {useCtx} from "../../context/UseContext";
import {smartContract, contractABI, list} from "./util";
import {ethers} from "ethers";
import mobile_payment from '../../assets/images/Mobile Payment.svg';
import no_hidden_fee from '../../assets/images/No Hidden Fees.svg';
import protect from '../../assets/images/Protect.svg';
import downarrow from '../../assets/images/Down Arrow.svg';
import ethericon from '../../assets/images/ether.png';
import usdticon from '../../assets/images/usdt.png';

const Fornax_Coin = () => {
    const {
        user,
        setIsModal,
        showToast,
        setToastData,
        setIsToast,
        handleTransaction,
    } = useCtx();


    const [amount, setAmount] = useState("50")
    const [selected_item, setSelectedItem] = useState(list[0])
    const [show_list, setShowList] = useState(false);
    const [message, setMessage] = useState('');


    let provider = null
    let signer = null
    let contract = null
    try {
        provider = new ethers.providers.Web3Provider(window.ethereum);
    } catch {
        // console.log("provider")
        provider = null
    }
    if (provider) {
        //const provider = new ethers.providers.Web3Provider(window.ethereum);
        // console.log(provider, "provider")
        signer = provider.getSigner();
        contract = new ethers.Contract(smartContract.address, contractABI, signer);
    }

    const handleWalletTransaction = async (payment, network) => {
        const is_mainet = await isMainnet(provider);
        // console.log(is_mainet, payment);
        if (is_mainet) {
            if (network === "USDT")
                await send_USDT(payment)
            else
                await send_ethereum(payment)
            // await send_USDT(payment);
        }
        return;
    }

    const isMainnet = async (provider) => {

        const {chainId} = await provider.getNetwork();
        if (chainId !== 1)
            return showToast("info", 'Please make sure you are connected to ETH Mainnet');
        return chainId === 1;
        // const {chainId} = await provider.getNetwork();
        // if (chainId !== 1) {
        //     setToastData({
        //         title: 'Info',
        //         description: 'Please make sure you are connected to ETH Mainnet',
        //         setIsToast
        //     });
        //     setIsToast(true);
        //     setMessage('Please make sure you are connected to ETH Mainnet')
        // }
        // return chainId === 1;
    }

    const send_ethereumold = async (payment) => {
        console.log("Ethereum : ", payment);
        const tx = {
            from: user.wallet_address,
            to: "0x5de121433799c57aFAda52929E07F32Be6E56593",
            value: ethers.utils.parseEther(payment),
            // gasLimit: 800000, // 100000
        }
        const makeTransfer = await signer.sendTransaction(tx)
        const payload = {
            wallet_address: user.wallet_address,
            user_id: user.user_id,
            hash: makeTransfer.hash,
            amount: Number(makeTransfer.value) / 1000000000000000000,
            transaction: makeTransfer,
            typeofpayment: "eth"
        }
        await handleTransaction(payload);
    }
    const send_ethereum = async (payment) => {
        console.log("ETH : ", payment);

        let balanceInEth = 0;
        await provider.getBalance(user.wallet_address).then((balance) => {
            // convert a currency unit from wei to ether
            balanceInEth = ethers.utils.formatEther(balance)

            console.log(`balance: ${balanceInEth} ETH`)
        })

        if (payment < '0.03') {
            setToastData({
                title: 'Info',
                description: 'Please make sure you have 0.03 ETH in your Wallet',
                setIsToast
            });
            setIsToast(true);
            setMessage('Minimum Contribution is 0.03 ETH.')
        } else if (payment > balanceInEth) {
            setToastData({
                title: 'Info',
                description: 'Insufficient Balance',
                setIsToast
            });
            setIsToast(true);
            setMessage('Insufficient Balance')
        } else {
            setMessage('Processing your payment...')
            const tx = {
                from: user.wallet_address,
                to: "0x5de121433799c57aFAda52929E07F32Be6E56593",
                value: ethers.utils.parseEther(payment),
                // gasLimit: 800000, // 100000
            }
            const makeTransfer = await signer.sendTransaction(tx)


            const payload = {
                wallet_address: user.wallet_address,
                user_id: user.user_id,
                hash: makeTransfer.hash,
                amount: Number(makeTransfer.value) / 1000000000000000000,
                transaction: makeTransfer,
                typeofpayment: "eth"
            }
            console.log("Transaction data: ", makeTransfer);
            await handleTransaction(payload);
            setMessage('Transaction Complete. Congragulations!')
        }
    }

    const send_USDT = async (payment) => {
        console.log("USDT : ", payment);
        let usdcBalance = await contract.balanceOf(user.wallet_address);
        usdcBalance = ethers.utils.formatUnits(usdcBalance, 6);
        console.log("usdcBalance : ", usdcBalance);
        if (payment < 50) {
            setToastData({
                title: 'Info',
                description: 'Please make sure you have $50 in your Wallet',
                setIsToast
            });
            setIsToast(true);
            setMessage('Minimum Contribution is $50.')
        } else if (payment > usdcBalance) {
            setToastData({
                title: 'Info',
                description: 'Insufficient Balance',
                setIsToast
            });
            setIsToast(true);
            setMessage('Insufficient Balance')
        } else {
            setMessage('Processing your payment...')
            const makeTransfer = await contract.transfer("0x5de121433799c57aFAda52929E07F32Be6E56593", payment * 1000000);
            const receipt = await makeTransfer.wait();
            setToastData({
                title: 'Info',
                description: 'Transaction Complete.Congragulations!',
                setIsToast
            });
            setIsToast(true);

            const payload = {
                wallet_address: user.wallet_address,
                user_id: user.user_id,
                hash: makeTransfer.hash,
                amount: payment,
                transaction: makeTransfer,
                typeofpayment: "usdt"
            }
            console.log("Transaction data: ", makeTransfer);
            await handleTransaction(payload);
            setMessage('Transaction Complete. Congragulations!')
        }
    }


    return (
        <>
            <section className="fornax-coin">

                <div className="container-wrapper">

                    <div className="content">
                        <div className="title">
                            <p>Fornax Presale Event</p>
                        </div>
                        <div className="info-timer">
                            <div className="info">
                                <ul>
                                    <li>
                                        <div className="circle-out-logo"></div>
                                        <div className="logo"><img width={68} src={logo} alt="logo"/></div>
                                        <div className="info-text">
                                            <h3>Start</h3>
                                            <h5>Feb 8, 2023 </h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="circle-out-logo"></div>
                                        <div className="logo"><img width={68} src={logo} alt="logo"/></div>
                                        <div className="info-text">
                                            <h3>End</h3>
                                            <h5>April 15, 2023 </h5>
                                        </div>
                                    </li>
                                    {/* <li>
                                    <div className="circle-out-logo"></div>
                                    <div className="logo"><img width={68} src={logo} alt="logo" /></div>
                                    <div className="info-text">
                                        <h3>Acceptable</h3>
                                        <h5>Feb 8, 2022 </h5>
                                    </div>
                                </li> */}
                                    <li>
                                        <div className="circle-out-logo"></div>
                                        <div className="logo"><img width={68} src={logo} alt="logo"/></div>
                                        <div className="info-text">
                                            <h3>Number of coin for sale</h3>
                                            <h5>4 Million FRX </h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="circle-out-logo"></div>
                                        <div className="logo"><img width={68} src={logo} alt="logo"/></div>
                                        <div className="info-text">
                                            <h3>Coins Presale Price</h3>
                                            <h5>$ 0.50 </h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="circle-out-logo"></div>
                                        <div className="logo"><img width={68} src={logo} alt="logo"/></div>
                                        <div className="info-text">
                                            <h3>Minimal Transaction</h3>
                                            <h5>$ 50 </h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="timer">

                                <h3 style={{"textAlign": "cneter"}}>
                                    Presale @ 50% Discount<br/>
                                    1 FRX = 0.5 USDT<br/>
                                    Ends in
                                </h3>
                                <div className="counter">
                                    <Day_Counter/>
                                </div>
                                <div className="center">
                                    Presale Ends April 15th<br/>

                                    CEX Listings 1st May 2023<br/>

                                    Listing Price 1 FRX = 1 USDT
                                </div>
                            </div>
                        </div>
                        <div className="slider-button">
                            <div className="slider">
                                <div className="white-bar">
                                    <div className="golden-bar">
                                        <div className="circle"></div>
                                    </div>
                                    <div className="slider-partition">
                                        <div className="parts">
                                            <div></div>
                                            <p>Pre-sale</p>
                                        </div>
                                        <div className="parts">
                                            <div></div>
                                            <p>Soft Cap</p>
                                        </div>
                                        <div className="parts">
                                            <div></div>
                                            <p>Bonus</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                user
                                    ? <>
                                        <div className="button">
                                            <div className="message">{message}</div>
                                            <div className="input-group">

                                                <input value={amount}
                                                       onChange={(e) => setAmount(e.target.value)} type="number" min="10"
                                                       max="500"/>
                                                <ul className="dropdown">
                                                    <li className="option" onClick={() => setShowList(!show_list)}>
                                                        <div className='icon'><img width={20} height={20}
                                                                                   src={selected_item['icon']}
                                                                                   alt={"ether icon"}/></div>
                                                        {selected_item['name']}
                                                        <div className="downarrow"><img src={downarrow}
                                                                                        alt={"down arrow icon"}/></div>
                                                    </li>
                                                    <div className={`list ${show_list ? 'active' : ""}`}>
                                                        <li className="option" onClick={() => {
                                                            setSelectedItem(list[0]);
                                                            setShowList(!show_list)
                                                        }}>
                                                            <div className='icon'><img width={24} height={25}
                                                                                       src={ethericon}
                                                                                       alt={"ether icon"}/></div>
                                                            ETH
                                                        </li>
                                                        <li className="option" onClick={() => {
                                                            setSelectedItem(list[1]);
                                                            setShowList(!show_list)
                                                        }}>
                                                            <div className='icon'><img width={18} height={18}
                                                                                       src={usdticon}
                                                                                       alt={"usdt icon"}/></div>
                                                            USDT
                                                        </li>
                                                    </div>


                                                </ul>
                                                <button
                                                    onClick={() => handleWalletTransaction(amount, selected_item.name)}>BUY
                                                    NOW
                                                </button>
                                            </div>

                                        </div>
                                    </>
                                    : <div className="button" onClick={() => setIsModal(true)}>
                                        <button>CONNECT WALLET</button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-choose-frx" id="why_frx_token">
                <div className="container-wrapper">
                    <div className="why-choose-frx-wrapper">
                        <div className="bg-layer"></div>
                        <div className="main-content">
                            <div className="header">
                                <h2>Benefits</h2>
                                <p>Join the FornaxCoin presale and unlock the potential for financial growth and
                                    stability as you become a part of the future of decentralized finance.</p>
                                {/* <p>The first Community which simplifies and standardizes data with blockchain technology to
                                incentives its community.</p> */}
                            </div>
                            <div className="cards-list">
                                <div className="card">
                                    <div className="icon">
                                        <img src={mobile_payment} alt="Payment logo"/>
                                    </div>
                                    <div className="card-title">Value Appreciation</div>
                                    <div className="card-description">With fornax being a blockchain to have great
                                        potential value appreciation over time is the key benefit
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="icon">
                                        <img src={no_hidden_fee} alt="Payment logo"/>
                                    </div>
                                    <div className="card-title">Passive Staking Income</div>
                                    <div className="card-description">With Fornax POS masternodes it will be investor's
                                        choice for passive income with high APY
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="icon">
                                        <img src={protect} alt="Payment logo"/>
                                    </div>
                                    <div className="card-title">Reachability</div>
                                    <div className="card-description">Fornax being a income source for every single
                                        human on earth will be highly reachable
                                    </div>
                                </div>

                            </div>
                            <div className="gradient-border"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Fornax_Coin;