import React, {useEffect, useState} from 'react';
import './Blogs.css';
import {getUserData} from "../../api/api";

const Blogs = () => {
    const [postList, setPostList] = useState(0);

    useEffect(() => {

        const getMediumUser = async () => {
            const user = await getUserData();
            return setPostList(user);
        }
        getMediumUser();
    }, [])

    console.log("Medium user: ", postList);
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
