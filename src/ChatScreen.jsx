import React, { useLayoutEffect, useRef, useState } from 'react';
import './ChatScreen.css';
import { messagesData } from './messageDB';

export const ChatScreen = () => {
    const [messages, setMessages] = useState(messagesData);
    const [inputValue, setInputValue] = useState('');

    const footRef = useRef(null);

    const onSendMessage = () => {
        setMessages(messages.concat({ id: messages.length + 1, content: inputValue }));
        setInputValue('');
    };

    useLayoutEffect(() => {
        footRef.current.scrollIntoView();
    }, [messages]);

    return (
        <div className='container'>
            <ul className='messages-container'>
                {messages.map((message, index) => (
                    <li key={message.id} className='message'>
                        <p>{message.content}</p>
                        {index === messages.length - 1 && <div ref={footRef}></div>}
                    </li>
                ))}
            </ul>
            <div className='input-container'>
                <input
                    type='text'
                    className='input'
                    value={inputValue}
                    onChange={({ target }) => setInputValue(target.value)}
                />
                <button className='button' onClick={onSendMessage}>
                    送信
                </button>
            </div>
        </div>
    );
};
