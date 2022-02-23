import React from "react";
import './SidebarChat.css';
import {Avatar} from "@material-ui/core";

function SidebarChat({lastMessage}) {

    return <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat_info">
            <h2>Room name</h2>
            <p>{lastMessage}</p>
        </div>
    </div>
}

export default SidebarChat;