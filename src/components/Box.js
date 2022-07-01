import React from 'react';
import Message from './Message';

export default function Box(props) {

    const messageElements = props.messages.map(message => (
        <Message key={message.messageId} message={message.messageItself} />
    ));

    const currentBoxIdentifier = 'box_number_' + props.id;

    return (
        <div id={currentBoxIdentifier} className="box">
            <div className="bot__messages">
                {messageElements}
            </div>
            <div className="bot__buttons">
                <div
                    onClick={() => props.toggle(props.nextBoxId)}
                    className="bot__button">
                    {props.nextButtoon.nextButtonText}
                </div>
            </div>
        </div>
    );
}