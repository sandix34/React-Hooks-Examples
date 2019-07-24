import React, { createContext, useState } from 'react';
import { tsPropertySignature } from '@babel/types';

export const MailContext = createContext();

const MailContextProvider = (props) => {

    const [messages, setMessages] = useState([
        { id: 1, tutle: "Birthday party", content: "Come and bring a bottle"},
        { id: 2, tutle: "This is a spam", content: "We want to sell you something"}
    ])

    return ( 
        <MailContext.Provider value={messages}>
            {props.children}
        </MailContext.Provider>
     );
}
 
export default MailContextProvider;