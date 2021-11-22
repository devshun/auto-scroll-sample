import React, { useLayoutEffect, useRef, useState } from 'react';
import { chatsData } from './ChatsDB';
import styled from 'styled-components';

export const Chats = () => {
    const [chats, setChats] = useState(chatsData)

    return (
        <div>
            {chats.map((chat, index) => (
                <div key={chat.id}>
                    <p>{chat.content}</p>
                </div>
            ))}
        </div>
    );
};
