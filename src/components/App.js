import React, { useEffect, useState } from 'react';
import { FormControl, IconButton, Input, InputLabel } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import db from './Firebase/Firebase';
import Message from './Message/Message';
import Logo from '../assets/images/logo.png';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function App() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');

    const name = () => {
        let enterName = '';
        while (!enterName || enterName.length > 16) {
            enterName = prompt('Please enter your name');
        }
        return enterName;
    }

    useEffect(() => {
        setUsername(name)
    }, [])

    useEffect(() => {
        db.collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
            })
    }, [])

    const updateInput = (e) => {
        setInput(e.target.value)
    }

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('messages').add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput('');
    }

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#0b81ff',
            },
            secondary: {
                // This is green.A700 as hex.
                main: '#0b81ff',
            },
        },
    });

    return (
        <div className="app">
            <header className="app__header">
            <h1 className="app-mytitle">Facebook Messenger</h1>
            <img className="app-image" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=50&h=50" alt="Facebook-messenger-logo" />
             

                <h3 className="app-welcome">Welcome <span className="bold">{username}</span> !</h3>
            </header>

            <form className="app__form" onSubmit={sendMessage}>
                <ThemeProvider theme={theme}>
                    <FormControl className="app__formControl">
                        <InputLabel value={input} onChange={updateInput}>Type a message...</InputLabel>
                        <Input className="app__input" color="primary" value={input} onChange={(e) => setInput(e.target.value)} />
                        <IconButton className="app__button" disabled={!input} color="primary" variant="contained" type="submit" onClick={sendMessage}><SendIcon /></IconButton>
                    </FormControl>
                </ThemeProvider>
            </form>

            <div className="app__messageContainer">
                <FlipMove>
                    {
                        messages.map(({ id, message }) => (
                            <Message key={id} username={username} message={message} />
                        ))
                    }
                </FlipMove>
            </div>
        </div>
    );
}

export default App;
