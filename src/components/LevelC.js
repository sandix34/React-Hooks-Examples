import React, { useContext } from 'react';

import { MailContext } from '../contexts/MailContext'

const LevelC = () => {

    const {messages, deleteMessage} = useContext(MailContext);

    return ( 
        <div className="level-c">
            <h1>Level C</h1>
            <div>
                Level A directly passed {messages.length} messages
                <hr/>
                {
                    messages.length > 0 ? (
                        <ul>
                            {messages.map(msg => <li key={msg.id}>{msg.title} <button onClick={() => deleteMessage(msg)}>delete</button></li>)}
                        </ul>
                    ) : (
                        <h3>no messages</h3>
                    )
                }
            </div>
        </div>
     );
}
 
export default LevelC;