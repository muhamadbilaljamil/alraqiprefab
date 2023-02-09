import React from 'react';
import {useCtx} from "../../context/UseContext";
import {Toast_Message} from "../Toast";
import Wallets_Modal from "../Modals/Wallets_Modal";
import Loading from "../Loading";

const ModalAndToast = () => {
    const {
        isToast,
        isModal,
        toastData,
        loading,
    } = useCtx();

    console.log("isLoading: ", loading);
    return (
        <>
            {isToast && <Toast_Message data={toastData}/>}
            {isModal && <Wallets_Modal/>}
            {loading && <Loading/>}
        </>

    );
}

export default ModalAndToast;