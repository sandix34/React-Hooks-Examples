import React, { useState } from "react";
import Prism from "prismjs";
import '../prism.css'
import { Row, Col } from "antd";

const FrameworkList = () => {  

  let [frameworks, setFrameworks] = useState([
    {
      id: 1,
      name: "React"
    },
    {
      id: 2,
      name: "Vue"
    },
    {
      id: 3,
      name: "Angular"
    }
  ]);

  let [frameworkName, setFrameworkName] = useState("");

  const addFramework = e => {
    e.preventDefault();
    setFrameworks([...frameworks, { id: Date.now(), name: frameworkName }]);
    setFrameworkName("");
  };

  

  return (
    <Row type="flex" justify="space-around" align="middle">
      <Col span={4}>
        <div>
          <form onSubmit={addFramework}>
            <input
              type="text"
              value={frameworkName}
              onChange={e => setFrameworkName(e.target.value)}
            />
            <button type="submit">add</button>
          </form>
          <hr />
          {frameworks.length === 0 ? (
            <h2>NoFrameworks</h2>
          ) : (
            <ul>
              {frameworks.map(fwk => (
                <li key={fwk.id}>{fwk.name}</li>
              ))}
            </ul>
          )}
        </div>
      </Col>
          <pre>
              <code className="language-javascript">
                  {`
                    import React, {useState} from 'react';
                    
                    const FrameworkList = () => {
                    
                        let [frameworks, setFrameworks] = useState([
                            {
                                id: 1,
                                name: 'React'
                            },
                            {
                                id: 2,
                                name: 'Vue'
                            },
                            {
                                id: 3,
                                name: 'Angular'
                            }
                        ]);
                        let [frameworkName, setFrameworkName] = useState('');
                        const addFramework = (e) => {
                            e.preventDefault();
                            setFrameworks([...frameworks, { id: Date.now(), name: frameworkName}]);
                            setFrameworkName('');
                        }
                        return ( 
                            <div>
                                <form onSubmit = {addFramework}>
                                    <input 
                                    type="text" 
                                    value={frameworkName} 
                                    onChange={e => setFrameworkName(e.target.value)}/>
                                    <button type="submit">add</button>
                                </form>
                                <hr/>
                                {
                                    (frameworks.length === 0) ? (
                                        <h2>NoFrameworks</h2>
                                    ) : (
                                        <ul>
                                            {
                                                frameworks.map(fwk => <li key={fwk.id}>{fwk.name}</li>)
                                            }
                                        </ul>
                                    )
                                }
                            </div>
                         );
                    }
                     
                    export default FrameworkList;
                  `}

              </code>
          </pre>
    </Row>
  );
};

export default FrameworkList;
