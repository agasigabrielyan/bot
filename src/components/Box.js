import React from 'react';
import ReactDOM from 'react-dom/client';
import Message from './Message';

export default function Box(props) {

    const messageElements = props.messages.map(message => (
        <Message key={message.messageId} message={message.messageItself} />
    ));


    return (
        <div className="box">
            <div className="bot__messages">
                {messageElements}
            </div>
            <div className="bot__buttons">
                <div onClick={(event) => props.toggle()} className="bot__button">{props.prevButton.prevButtonText}</div>

                <div
                    onClick={(event) => props.toggle(props.nextBoxId)}
                    className="bot__button">
                    {props.nextButtoon.nextButtonText}
                </div>
            </div>
        </div>
    );
}