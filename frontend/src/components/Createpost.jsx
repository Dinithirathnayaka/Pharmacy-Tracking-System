import React from 'react'
import {PermMedia, LocalOffer, AddReaction, LocationOn, MoreHoriz}  from "@mui/icons-material"

export default function Createpost({closeModal}) {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="modalTop">
                <span className="modalText">Create Post</span>
                <button className="closeButton" onClick={() => closeModal(false)}>X</button>
            </div>
            <hr className="modalHr" />
            <div className="modalBody">
                <div className="profileDetails">
                    <img src="/assets/images/person/1.jpg" alt="" className="createPostProfileImg" />
                    <span className="createPostProfileName">Amila Aponsu</span>
                </div>
                <input placeholder="What's on your mind Amila?" className="createPostText" />
                <div className="postOptions">
                    <span className="optionsText">Add to your post</span>
                    <div className="postOptionIcons">
                    <PermMedia className="imageColor"/>
                    <LocalOffer className="tagColor"/>
                    <AddReaction className="emotionColor"/>
                    <LocationOn className="locationColor"/>
                    <MoreHoriz className="optionColor"/>
                    </div>
                </div>
            </div>
            <div className="modalBottom">
                <button className="postButton">P o s t</button>
            </div>
        </div>
    </div>
  )
}
