import React from 'react';
import ReactDOM from 'react-dom/client';
import Message from './components/Message';

export default function Box(props) {

    const messageElements = props.messages.map(message => (
        <Message
            key={message.messageId}
            message={message.messageItself} />
    ));

    return (
        <div className="box">
            {messageElements}
        </div>
    );
}