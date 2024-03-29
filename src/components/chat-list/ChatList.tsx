import React from "react";
import {
    Avatar,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Paper,
    Divider,
} from "@mui/material";
import './ChatList.css';

const ChatList = ({ contacts, onContactClick }) => {
    return (
        <>
            {contacts.map(contact => (
                <div key={contact.id}>
                    <ListItem
                        button
                        className="contact-card"
                        onClick={() => onContactClick(contact)}
                    >
                        <ListItemIcon>
                            <Avatar className="chat-list-contact-icon" />
                        </ListItemIcon>
                        <ListItemText
                            primary={<span className="contact-name">{contact.name}</span>}
                            secondary={contact.lastText}
                        />
                        <Typography variant="body2" color="textSecondary">
                            {contact.lastSent}
                        </Typography>
                    </ListItem>
                </div>
            ))}
        </>
    );
};

export default ChatList;
