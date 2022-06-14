import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Button(props) {

    return (
        <div className="bot__button">
            {props.text}
        </div>
    );
}