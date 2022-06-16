import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Message(props) {

    return (
        <div className="box__message">
            <div dangerouslySetInnerHTML={{ __html: props.message }}>

            </div>
        </div>
    );
}