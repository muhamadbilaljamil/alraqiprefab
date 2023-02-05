import React, {useEffect, useState} from 'react';
import './Toast_Message.css'

export const Toast_Message = ({data}) => {
    const {title, description, setIsToast} = data;
    const [progress, setProgress] = useState(true);
    const [toast, setToast] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setToast(false)
        }, 3000)

        setTimeout(() => {
            setProgress(false)
        }, 3300)

        setTimeout(() => {
            setIsToast(false)
        }, 3200)
    }, []);

    const handleCloseToast = () => {
        setToast(false)
        setIsToast(false)
        setTimeout(() => {
            setProgress(false)
        }, 100)
    }

    return (
        <div className="toast-wrapper">
            <div className={`toast ${toast ? 'active' : ''}`}>
                <div className="toast-content">
                    <i className="fas fa-solid fa-check check"></i>
                    <div className="message">
                        <span className="text text-1">{title}</span>
                        <span className="text text-2">{description}</span>
                    </div>
                </div>
                <i className="fa-solid fa-xmark close" onClick={handleCloseToast}>X</i>
                <div className={`progress ${progress ? 'active' : ''}`}></div>
            </div>
        </div>

    );
}
