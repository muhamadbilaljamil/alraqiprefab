// ** React Imports
import {createContext, useEffect, useState} from 'react'
import {ethers} from "ethers";
import {getNonce, signatureAuthentication, send_transaction} from "../api/api";


// ** Defaults
const defaultProvider = {
    menuOpen: false,
    setMenuOpen: () => {
    },
    user: null,
    setUser: () => null,
    showProfile: false,
    setShowProfile: () => Boolean,
    isToast: false,
    setIsToast: () => Boolean,
    isModal: false,
    setIsModal: () => Boolean,
    toastData: {
        title: '',
        description: '',
        setIsToast: '',
    },
    setToastData: () => {
    },
    handleTransaction: () => Promise.resolve(),
    handleWalletConnect: () => Promise.resolve(),
    handleClickScroll: () => {
    },
    loading: false,
    setLoading: () => Boolean,
    scroll: 0,
}
const Context = createContext(defaultProvider)

const ContextProvider = ({children}) => {
    // ** States
    const [menuOpen, setMenuOpen] = useState(defaultProvider.menuOpen);
    const [showProfile, setShowProfile] = useState(defaultProvider.showProfile);
    const [user, setUser] = useState(defaultProvider.user)
    const [isToast, setIsToast] = useState(defaultProvider.isToast);
    const [isModal, setIsModal] = useState(defaultProvider.isModal);
    const [toastData, setToastData] = useState(defaultProvider.toastData);
    const [loading, setLoading] = useState(defaultProvider.loading)
    const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized)
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const initAuth = () => {
            setIsInitialized(true)
            const user_wallet = localStorage.getItem("user_wallet")
            if (user_wallet) {
                // setLoading(false)
                setUser(JSON.parse(user_wallet))
            } else
                setUser(null)
        }
        initAuth()
        const handleScroll = () => {
            setScroll(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    console.log("Event Listeners: ", scroll);
    const showToast = (title, description) => {
        setToastData({
            title,
            description,
            setIsToast,
        })
        return setIsToast(true);
    }

    const signMessage = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await provider.send("eth_requestAccounts", []);
            console.log('Accounts :', accounts);
            if (accounts.length > 0) {
                const {message} = await getNonce(accounts[0]);
                const signer = await provider.getSigner()
                const signature = await signer.signMessage(message)
                console.log()
                const address = await signer.getAddress()
                return {
                    wallet_address: address,
                    signature,
                }
            }

        } catch (err) {
            console.log(err.message)
            return err.code;
        }
    }

    const handleTransaction = async (payload) => {
        console.log('payload', payload);
        const response = await send_transaction(payload);
        const user_wallet = {...user, balance: response.balance}
        console.log("user_wallet", user_wallet);
        window.localStorage.setItem('user_wallet', JSON.stringify(user_wallet));
        setUser(user_wallet);

    }
    const handleWalletConnect = async () => {
        setIsModal(false);
        if (!window.ethereum)
            return showToast('Warning', 'Please install your wallet');
        const sign_message_response = await signMessage();
        if (sign_message_response === 'ACTION_REJECTED')
            return showToast('Info', 'Wallet connection rejected');
        // console.log("Sign message response: ", sign_message_response);
        const verify_response = await signatureAuthentication(sign_message_response);
        window.localStorage.setItem("user_wallet", JSON.stringify(verify_response));
        setUser(verify_response);
        showToast("info", "Wallet connected successfully");

    }

    const handleClickScroll = (e) => {
        const element = document.getElementById(e);
        console.log("Element: ", element);
        setMenuOpen(false);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    const values = {
        menuOpen,
        setMenuOpen,
        showProfile,
        setShowProfile,
        user,
        setUser,
        isToast,
        setIsToast,
        showToast,
        isModal,
        setIsModal,
        toastData,
        setToastData,
        handleTransaction,
        handleWalletConnect,
        handleClickScroll,
        loading,
        setLoading,
        scroll
    }

    return <Context.Provider value={values}>{children}</Context.Provider>
}

export {Context, ContextProvider};


