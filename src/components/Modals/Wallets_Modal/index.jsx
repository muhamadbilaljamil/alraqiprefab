import React from 'react';
import './Wallets_Modal.css'
import metamask from '../../../assets/images/maskwallet.svg';
import walletconnect from '../../../assets/images/walletconnect.svg';
import X from '../../../assets/images/X.svg';
import {useCtx} from "../../../context/UseContext";

const Wallets_Modal = () => {
    const {setIsModal, handleWalletConnect} = useCtx();
    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5>SELECT WALLET PROVIDER</h5>
                        <button onClick={() => setIsModal(false)}><span>Close</span><img src={X} alt=""/></button>
                    </div>
                    <div className="modal-body">
                        <div className="body-content">
                            <div className="wallet-button" onClick={handleWalletConnect}>
                                <img src={metamask} alt=""/>
                                <h4 >Metamask</h4>
                            </div>
                            {/*  <div className="wallet-button">
                                <img src={walletconnect} alt="" /><h4 className="mt-7 text-[18px] font-[Poppins] font-[700]">WalletConnect</h4>
                                </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wallets_Modal;
