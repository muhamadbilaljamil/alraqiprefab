import React, {useEffect} from 'react';
import './Blogs.css';
import {getUserData} from "../../api/api";

const Blogs = () => {

    useEffect(() => {
        const getMediumUser = async() => {
            const user = await getUserData();
            console.log("Medium user: ", user);
            return user
        }
        getMediumUser();
    })
    return (
        <div className="blogs-wrapper" id="blogs">
            <div className="container-wrapper">
                <div className="blogs-content">
                    <div className="bg-layer"></div>
                    <div className="content">
                        <div className="title">Blogs</div>
                        <div className="description-list">Coming Soon</div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Blogs
