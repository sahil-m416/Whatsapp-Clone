import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import db from './firebase';
import './SidebarChat.css';
import {Link } from 'react-router-dom';
import firebase from 'firebase';

function SidebarChat({ id, Name, addNewChat }) {

    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if(id) {
            db.collection('rooms')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>  
                setMessages(snapshot.docs.map((doc) =>
                doc.data()
            )));
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("please enter name for chat room.");
        if(roomName) {
            db.collection("rooms").add({
                Name: roomName,
            });            
        }
    };
    return !addNewChat ? (
        <Link to = {`/rooms/${id}`}>

            <div className='sidebarChat'>
                <Avatar src = { `https://avatars.dicebear.com/api/human/${seed}.svg` } />
                    <div className="sidebarChat_info">
                        <h2>{Name}</h2>
                        <p>{messages[0]?.message}</p>
                    </div>
            </div>

        </Link>
        
    ) : (
        <div onClick= {createChat}
            className="sidebarChat">
                <h2>Add a new Chat</h2>
            </div>
    )
}

export default SidebarChat;
