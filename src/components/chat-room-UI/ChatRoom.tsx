import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ButtonBase,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  Settings as SettingsIcon,
  NotificationsActive as NotificationsActiveIcon,
  Groups as GroupsIcon,
  Help as HelpIcon,
  Message as MessageIcon,
  Chalet as ChaletIcon,
  ContactMail as ContactMailIcon,
  Close as CloseIcon,
  Block as BlockIcon,
  Delete as DeleteIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import "./ChatRoom.css"; // Import the CSS file
import SearchIcon from "@mui/icons-material/Search";
import ChatList from "../chat-list/ChatList.tsx";
import ChatComponent from "../chat-component/ChatComponent.tsx";

const ChatRoom = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedContactVisibility, setSelectedContactVisibility] = useState(true);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [contactsList, setContactList] = useState([
    { name: "test1", lastText: "I sent you something", lastSent: "20:00" },
  ]);

  const data = [
    { name: "Duniya", lastText: "Hi!", lastSent: "20:00" },
    { name: "Somitra", lastText: "Message received", lastSent: "19:30" },
    { name: "DD", lastText: "Are you there?", lastSent: "18:45" },
    { name: "Pratik", lastText: "Rabadne Chale?", lastSent: "17:20" },
    { name: "Mayank bhai", lastText: "Sutta peoge?", lastSent: "16:10" },
    { name: "OP bhai", lastText: "Paidal Chaloge?", lastSent: "15:30" },
    {
      name: "Utkarsh Bhai",
      lastText: "Gana Sunoge?",
      lastSent: "14:50",
    },
    {
      name: "Chote Utkarsh Bhai",
      lastText: "Complan peeoge",
      lastSent: "14:00",
    },
    { name: "test9", lastText: "Received, thanks!", lastSent: "13:20" },
    {
      name: "test10",
      lastText: "Please confirm your availability",
      lastSent: "12:40",
    },
    {
      name: "test11",
      lastText: "Need your help with something",
      lastSent: "12:00",
    },
    { name: "test12", lastText: "Just checking in", lastSent: "11:20" },
    {
      name: "test13",
      lastText: "Can you give me an update?",
      lastSent: "10:30",
    },
    { name: "test14", lastText: "Let's discuss this later", lastSent: "09:50" },
    { name: "test15", lastText: "I'll be late today", lastSent: "09:10" },
    {
      name: "test16",
      lastText: "Sorry, I missed your call",
      lastSent: "08:30",
    },
    { name: "test17", lastText: "Check your email", lastSent: "07:40" },
    {
      name: "test18",
      lastText: "Please review the document",
      lastSent: "07:00",
    },
    { name: "test19", lastText: "Got it, thanks!", lastSent: "06:20" },
    { name: "test20", lastText: "I'm on my way", lastSent: "05:50" },
  ];

  const handleContactClick = (contact) => {
    setSelectedContact(contact === selectedContact ? null : contact);
  };

  const handleCloseContactPanel = () => {
    setSelectedContactVisibility(false);
  };

  return (
    <div className="chat-room-container">
      <Paper elevation={3} className="user-details-panel">
        <Avatar className="user-dp" />
        <List className="list">
          <ListItem component={ButtonBase} className="home">
            <ListItemIcon sx={{ fontSize: "24px" }}>
              <ChaletIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem component={ButtonBase} className="notifications">
            <ListItemIcon>
              <NotificationsActiveIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem component={ButtonBase} className="groups">
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem component={ButtonBase} className="Help">
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem component={ButtonBase} className="chats">
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem component={ButtonBase} className="settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem component={ButtonBase} className="contacts">
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Paper>
      <Grid container className="grid-container">
        <Grid item className="chatList">
          <TextField
            id="search"
            label="Search"
            placeholder="Enter For Search..."
            variant="outlined"
            fullWidth
            margin="normal"
            className="chat-searchbox"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <IconButton>
            {/* <AddIcon /> */}
          </IconButton>
          <hr />
          <ChatList contacts={data} onContactClick={handleContactClick} />
        </Grid>
        <Grid item className="chatWindow">
          {selectedContact ? (
            <ChatComponent contact={selectedContact} />
          ) : (
            <Typography variant="h6">Select a contact to start chatting</Typography>
          )}
        </Grid>
        {selectedContactVisibility && selectedContact && (
          <Grid item className="contact-details-panel-right">
            <Paper elevation={3} className="right-panel-details">
              <IconButton
                onClick={handleCloseContactPanel}
                className="close-icon"
              >
                <CloseIcon />
              </IconButton>
              <Avatar className="contact-details-avatar" />
              <Typography variant="h6" className="contact-details-name">
                {selectedContact.name}
              </Typography>
              <Typography variant="body2" className="contact-details-about">
                {/* Add about info here */}
                About: Some information about the contact goes here...
              </Typography>
              <Accordion className="media-accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="media-content"
                  id="media-header"
                >
                  <Typography variant="h6">Media</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    {/* Add media details (images, videos) here */}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <div className="contact-details-actions">
                <Button variant="outlined" startIcon={<BlockIcon />}>
                  Block
                </Button>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </div>
            </Paper>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ChatRoom;
