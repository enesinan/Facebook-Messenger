import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {

    const isUser = username === message.username;

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Typography className="alignLeft" variant="body2" display="block" gutterBottom>
                {!isUser && message.username}
            </Typography>
            <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
                <CardContent>
                    <Typography color="initial" variant="subtitle1" component="h5"
                    >
                        {message.message}
                    </Typography>
                </CardContent>
            </Card >
        </div>

    )
})

export default Message;