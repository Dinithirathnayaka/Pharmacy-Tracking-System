import React from 'react'
import "../Styles/EditProfile.css"
import {Message,CheckCircle,Search,MoreHoriz,LocationOn,
    Info, ThumbUp, RssFeed, PersonSearch, Language, Call, Email,
    MoreVert, Favorite,ThumbUpOffAlt,ChatBubbleOutline} from "@mui/icons-material"
    
import { useState } from "react";
import MessageBox from "./MessageBox";

export default function UserProfile() {

    const [openModal, setOpenModal] = useState(false);

  return (
    <>
     
    <div className="profileWrapper">

        <div className="profileLeft"></div>

        <div className="profileCenter">
            <div className="profileTop">
                <div className="profileTopUp">
                    <div className="profileDetails">
                        <div className="profileImg">
                            <img src="/assets/images/person/4.jpg" alt="" className="ProfilePicture" />
                        </div>
                        <div className="userNameType">
                            <div className="userNameCheckCircle">
                                <div className="userName">Nuwan Pradeep</div>
                            <CheckCircle className="checkCircle" fontSize='xx-small'/>
                        </div>
                        <div className="userType">Pharmacist</div>
                    </div>
                </div>
   
                <button className="editProfileBtn">Edit profile</button>
                </div>
   
                <hr className="profileHr" />

                <div className="profileTopDown">
                    <div className="topDownLeft"></div>
                    <div className="topDownRight">
                        <Message 
                            className="messageIcon"
                            fontSize='large'
                            onClick={() => {
                                setOpenModal(true);
                                            }
                                    }
                        />
                        <span 
                            className="message"
                            onClick={() => {
                                setOpenModal(true);
                                            }
                                    }
                        >Message</span>

                        <button className="searchButton">
                            <Search className="searchIcon" fontSize='large'/>
                        </button>   
                        <MoreHoriz className="optionIcon" fontSize='large'/>
                    </div>
                </div>
            </div>

            <div className="profileBottom">
                <div className="profileBottomLeft">
                    <div className="searchLocation">
                        <img src="/assets/images/mapImage1.png" alt="" className="locationBackgroundImg" />
                    </div>

                    <ul className="profileDetailsList">
                        <li className="bottomLeftListItems">
                            <info className="bottomLeftListIcon"><Info/></info>
                            <span className="bottomLeftListIconName">Studied at Sabaragamuwa University Of Sri Lanka</span>
                        </li>
            
                        <li className="bottomLeftListItems">
                            <info className="bottomLeftListIcon"><ThumbUp/></info>
                            <span className="bottomLeftListIconName">1163 persons liked</span>
                        </li>
                        <li className="bottomLeftListItems">
                            <info className="bottomLeftListIcon"><RssFeed/></info>
                            <span className="bottomLeftListIconName">963 persons followed</span>
                        </li>
                        <li className="bottomLeftListItems">
                            <info className="bottomLeftListIcon"><PersonSearch/></info>
                            <span className="bottomLeftListIconName">463 persons searched</span>
                        </li>
                        <li className="bottomLeftListItems">
                            <info className="bottomLeftListIcon"><Language/></info>
                            <span className="bottomLeftListIconName">www.pharmacy.lk</span>
                        </li>
                        <li className="bottomLeftListItems">
                            <info className="bottomLeftListIcon"><Call/></info>
                            <span className="bottomLeftListIconName">94+ 115 697 845</span>
                        </li>
                        <li className="bottomLeftListItems">
                            <info className="bottomLeftListIcon"><Email/></info>
                            <span className="bottomLeftListIconName">pharmacy@gmail.com</span>
                        </li>
                    </ul>
        
                </div>

                <div className="profileBottomRight">
                    <div className="post">
                            <div className="postTop">
                                <div className="postTopLeft">
                                    <img className="postProfileImg" src="/assets/images/person/2.jpg" alt="" />
                                    <span className="postUserName">Nuwan Pradeep</span>
                                    <span className="postDate">5 min ago</span>
                                </div>

                                <div className="postTopRight">
                                    <MoreVert className="morevert" />
                                </div>
                            </div>

                            <div className="postCenter">
                                <span className="postText">The following medicines are available</span>
                                <br />
                                <img className="postImg" src="/assets/images/post/Cetrimed.webp" alt="" />
                            </div>

                            <div className="postBottom">
                                <div className="likeCommentCount">
                                    <div className="postBottomLeft">
                                        <Favorite htmlColor="rgb(255,67,111)" className="likeIcon" />
                                        <ThumbUp htmlColor="rgb(53,70,255)" className="likeIcon" />
                                        <span className="postLikeCounter">32 people like this</span>
                                    </div>

                                    <div className="postBottomRight">
                                        <span className="postCommentText">9 comments</span>
                                    </div>
                                </div>

                                <hr/>

                                <div className="likeAndComment">
                                    <div className="postBottomLeft">
                                        <ThumbUpOffAlt className="likeIcon"/>
                                        <span className="postLike">Like</span>
                                    </div>

                                    <div className="postBottomLeft">
                                        <ChatBubbleOutline className="likeIcon"/>
                                        <span className="postLike">Comment</span>
                                    </div>
                                </div>

                                <hr/>

                                <div className="showComment">
                                    <p className="postLike">View more comments</p>
                                    <div className="commentPreview">
                                        <img className="commenterImg" src="/assets/images/person/3.jpg" alt="person3" />
                                        <div>
                                            <div className="commenterDetails">
                                                <div className="commenterName">Nimali Fonseka</div>
                                                <div className="comment">I need this.</div>
                                            </div>

                                            <div className="commentDetails">
                                                <span className="commentDetailsText">Like</span>
                                                <span className="commentDetailsText">Comment</span>
                                                <span className="commentDetailsText">10h</span>
                                            </div>
                                        </div>
                                    </div>

                                    <br />

                                    <div className="addNewComment">
                                        <img className="commentProfileImg" src="/assets/images/person/1.jpg" alt="person1" />
                                        <input placeholder="Write a Comment" className="commentInput" />
                                    </div>

                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="profileRight">
            {openModal && <MessageBox closeModal={setOpenModal} />}
        </div>
    </div>
     
    </>
  )
}
