import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Message(props) {

    const styles = {
        maxWidth: '100%'
    };

    if(props.message.length < 50) {
        styles.maxWidth = '50%';
    } else if(props.message.length > 50 && props.message.length < 75) {
        styles.maxWidth = '75%';
    }

    return (
        <div style={styles} className="box__message">
            <div dangerouslySetInnerHTML={{ __html: props.message }}>

            </div>
        </div>
    );
}