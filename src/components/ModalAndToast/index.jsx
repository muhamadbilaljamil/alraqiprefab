import React from 'react';
import {useCtx} from "../../context/UseContext";
import {Toast_Message} from "../Toast";
import Wallets_Modal from "../Modals/Wallets_Modal";
import Loading from "../Loading";
import Top_Screen_Button_1 from "../Top_Screen_button/Top_Screen_Button_1";

const ModalAndToast = () => {
    const {
        isToast,
        isModal,
        toastData,
        loading,
    } = useCtx();

    // console.log("isLoading: ", loading);
    return (
        <>
            {isToast && <Toast_Message data={toastData}/>}
            {isModal && <Wallets_Modal/>}
            {loading && <Loading/>}
            <Top_Screen_Button_1 />
        </>

    );
}

export default ModalAndToast;