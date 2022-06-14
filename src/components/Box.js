import React from 'react';
import ReactDOM from 'react-dom/client';
import Message from './Message';
import Button from './Button';

export default function Box(props) {

    const messageElements = props.messages.map(message => (
        <Message key={message.messageId} message={message.messageItself} />
    ));

    const prevButton = <Button link={props.prevButton.prevButtonLink} text={props.prevButton.prevButtonText} />
    const nextButton = <Button link={props.nextButtoon.nextButtonLink} text={props.nextButtoon.nextButtonText} />


    return (
        <div className="box">
            <div className="bot__messages">
                {messageElements}
            </div>
            <div className="bot__buttons">
                {prevButton} {nextButton}
            </div>
        </div>
    );
}