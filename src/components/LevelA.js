import React from "react";
import LevelB from "./LevelB";

import Prism from "prismjs";
import "../prism.css";
import { Row, Col } from "antd";

import { Collapse } from "antd";
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const LevelA = () => {
  return (
    <Row type="flex" justify="space-around" align="middle">
      <Col span={4}>
        <div className="level-a">
          <h1>Level A</h1>
          <LevelB />
        </div>
      </Col>
      <Col span={12}>
        <Collapse onChange={callback}>
          <Panel forceRender="true" header="Component Level A" key="1">
            <pre>
              <code className="language-javascript">
                {`
                  import React from 'react';
                  import LevelB from './LevelB';
                  
                  const LevelA = () => {
                      return ( 
                          <div className="level-a">
                              <h1>Level A</h1>
                              <LevelB/>
                          </div>
                       );
                  }
                  
                  export default LevelA;   
                `}
              </code>
            </pre>
          </Panel>
          <Panel forceRender="true" header=" ComponentLevel B" key="2">
            <pre>
              <code className="language-javascript">
                {`
                    import React from 'react';
                    import LevelC from './LevelC';
                    
                    const LevelB = () => {
                        return ( 
                            <div className="level-b">
                                <h1>Level B</h1>
                                <LevelC/>
                            </div>
                         );
                    }
                    
                    export default LevelB; 
                    `}
              </code>
            </pre>
          </Panel>
          <Panel forceRender="true" header="Component Level C" key="3">
            <pre>
              <code className="language-javascript">
                {`
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
                `}
              </code>
            </pre>
          </Panel>
          <Panel forceRender="true" header="MailContext.js" key="4">
            <pre>
              <code className="language-javascript">
                {`
                  import React, { createContext, useState } from 'react';
                  
                  export const MailContext = createContext();
                  
                  const MailContextProvider = (props) => {
                  
                      const [messages, setMessages] = useState([
                          { id: 1, title: "Birthday party", content: "Come and bring a bottle"},
                          { id: 2, title: "This is a spam", content: "We want to sell you something"}
                      ]);
                  
                      return ( 
                        <MailContext.Provider value={{messages: messages, deleteMessage: deleteMessage}}>
                              {props.children}
                          </MailContext.Provider>
                       );
                  }
                  
                  export default MailContextProvider;  
                `}
              </code>
            </pre>
          </Panel>
          <Panel forceRender="true" header="App.js" key="5">
            <pre>
              <code className="language-javascript">
                {`
                  import React from 'react';
                  import LevelA from './components/LevelA';
                  import MailContextProvider from './contexts/MailContext';
                  
                  function App() {
                    return (
                      <div>
                          <MailContextProvider>
                            <LevelA/>
                          </MailContextProvider>
                      </div>
                    );
                  }
                  export default App;  
                `}
              </code>
            </pre>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );
};

export default LevelA;
