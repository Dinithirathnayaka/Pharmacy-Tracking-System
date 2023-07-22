import React from 'react'
import "../Styles/MessageBox.css"
import {Call, Videocam, Settings, HighlightOff,CameraAlt,AttachFile,Send} from "@mui/icons-material"

export default function MessageBox({closeModal}) {
  return (
<>
    <div className="messageBoxWrapper">
        <div className="messageBoxTop">
            <img src="/assets/images/person/3.jpg" alt="" className="messagerProfileImg" />
            <div className="profileStatus">
                <div className="messagerUserName">Nethmi Ekanayaka</div>
                <div className="activeStatus">active 10m ago</div>
            </div>
            <div className="messageOptions">
                <Call fontSize='small' className="messageOptionIcon"/>
                <Videocam fontSize='small' className="messageOptionIcon"/>
                <Settings fontSize='small' className="messageOptionIcon"/>
            </div>
            <div className="closeBtn" onClick={() => closeModal(false)} ><HighlightOff fontSize='small'/></div>
        </div>
        <div className="messageBoxCenter">
           <ul className="chatbox">
                <li className="chat incoming">
                    <p>Hi Nuwan. May I know if this medicine is available?</p>
                </li>
                    <img src="/assets/images/post/3.png" alt="" className="recievedImg" />
                <li className="chat outgoing">
                    <p>Yes, it is.</p>
                </li>
           </ul>
        </div>

        <hr />

        <div className="messageBoxBottom">
            <CameraAlt fontSize='medium' className="messageOptionIcon"/>
            <AttachFile fontSize='medium' className="messageOptionIcon"/>
            <input placeholder="Type here...." className="typeMessage" required />
            <Send fontSize='medium' className="messageSendIcon"/>
        </div>
    </div>
</>
  )
}
