import React, {useEffect, useState} from 'react';
import './Blogs.css';
import {getUserData} from "../../api/api";
import mobile_payment from "../../assets/images/Mobile Payment.svg";
import no_hidden_fee from "../../assets/images/No Hidden Fees.svg";
import protect from "../../assets/images/Protect.svg";

const Blogs = () => {
    const [postList, setPostList] = useState([]);

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
                        <div className="title">
                            <h3> Blogs </h3>
                            <div className="blogs-title-b-border"></div>
                        </div>
                        <div className="blog-post-wrapper">
                            <div className="main-content">
                                <div className="cards-list">
                                    {
                                        postList.map((post, index) => {
                                            return (
                                                <a href={post.link} target="_blank">
                                                    <div className="card">
                                                        <div className="icon">
                                                            <img src={post.coverPhoto} alt="Payment logo"/>
                                                        </div>
                                                        <div className="card-title">{post.title}</div>
                                                        <div className="card-description">
                                                        </div>
                                                        <div className="published-info">
                                                            <div className="publish-by">By: {post.author}</div>
                                                            <div className="divider"></div>
                                                            <div className="publish-at">On: {post.publishAt}</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            );
                                        })
                                    }

                                    {/*<div className="card">*/}
                                    {/*    <div className="icon">*/}
                                    {/*        <img src={no_hidden_fee} alt="Payment logo"/>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="card-title">Passive Staking Income</div>*/}
                                    {/*    <div className="card-description">With Fornax POS masternodes it will be*/}
                                    {/*        investor's*/}
                                    {/*        choice for passive income with high APY*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="card">*/}
                                    {/*    <div className="icon">*/}
                                    {/*        <img src={protect} alt="Payment logo"/>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="card-title">Reachability</div>*/}
                                    {/*    <div className="card-description">Fornax being a income source for every single*/}
                                    {/*        human on earth will be highly reachable*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                </div>
                                <div className="gradient-border"></div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

    export default Blogs
