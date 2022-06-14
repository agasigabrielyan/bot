import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    return (
        <div
            style={styles}
            className="box"
            onClick={() => props.toggle(props.id)}>
            <h2>{props.title}</h2>
            <p>
                {props.description}
            </p>
        </div>
    );
}