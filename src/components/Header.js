import React from 'react';

export default function Header() {
    const logoStyle = {
        width: '32px',
        position: 'relative',
        top: '3px',
        left: '-15px'
    }

    return (
        <div className="bot-header">

                <h1 className="bot-heading">
                    <img style={logoStyle} src="../includes/robot.svg" alt="Обучающий bot Bitrix24" title="Обучающий bot Bitrix24" />
                    <span>Обучающий Bitrix24 бот</span>
                </h1>

        </div>
    );
}