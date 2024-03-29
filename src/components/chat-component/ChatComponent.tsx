import React from 'react';
import { Avatar, Divider, Paper, Typography } from '@mui/material';
import './ChatComponent.css'
import VideocamIcon from '@mui/icons-material/Videocam';

const ChatComponent = ({ contact }) => {
    // Dummy data for messages
    const messages = [
        { sender: 'You', text: 'Hi there!' },
        { sender: contact.name, text: 'Hello!' },
        { sender: 'You', text: 'How are you?' },
        { sender: contact.name, text: 'I am good, thanks!' },
        // Add more messages as needed
    ];

    return (
        <Paper elevation={3} className="chat-component">
            <div className='chat-component-header'>
                <Avatar />
                <Typography variant="h6">{contact.name}</Typography>
            <VideocamIcon className='video-icon'/>
            </div>
            <Divider></Divider>
            <div className='chat-area'>
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`chat-message ${message.sender === 'You' ? 'sent' : 'received'}`}>
                        <Typography variant="body1">{message.text}</Typography>
                    </div>
                ))}
            </div>
            </div>
        </Paper>
    );
};

export default ChatComponent;
