import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "../prism.css";
import { Row, Col } from "antd";

const Keycode = () => {
  const [keycode, setKeycode] = useState("");
  const [key, setKey] = useState("");
  const getKeyCode = e => {
    console.log(e);
    setKeycode(e.keyCode);
    setKey(e.key);
  };

  useEffect(() => {
    document.addEventListener("keyup", getKeyCode);
    return () => document.removeEventListener("keyup");
  }, []);

  return (
    <div>
      <Row type="flex" justify="space-around" align="middle">
        <Col span={4}>
          <input type="text" />
          {key.length === 0 ? (
            <div>press any keyboard key</div>
          ) : (
            <div>Key is "{key}"</div>
          )}
          <div className="key-code">{keycode}</div>
        </Col>
        <pre>
            <code className="language-javascript">
                {`
                  import React, { useState, useEffect } from 'react';

                  const Keycode = () => {
                  
                      const [keycode, setKeycode] = useState('');
                      const [key, setKey] = useState('');
                      const getKeyCode = (e) => {
                          console.log(e);
                          setKeycode(e.keyCode);
                          setKey(e.key);
                  
                      }
                  
                      useEffect(() => {
                          document.addEventListener('keyup', getKeyCode);
                          return () => document.removeEventListener('keyup');
                      }, []);
                  
                      return ( 
                          <>
                              <input type="text"/>
                              {
                                  key.length === 0 ? (
                                      <div>press any keyboard key</div>
                                  ) : (
                                      <div>Key is "{key}"</div>
                                  )
                              }
                              <div className="key-code">{keycode}</div>
                          </>
                       );
                  }
                  
                  export default Keycode;  
                `}
            </code>
        </pre>
      </Row>
    </div>
  );
};

export default Keycode;
