import React from 'react';

export default function Message(props) {

    return (
        <div className="box__message">
            <div dangerouslySetInnerHTML={{ __html: props.message }}>

            </div>
        </div>
    );
}