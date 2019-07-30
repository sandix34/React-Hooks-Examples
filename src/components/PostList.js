import React, { useState, useEffect } from "react";
import axios from "axios";

import { Row, Col } from "antd";

import Prism from "prismjs";
import "../prism.css";

const PostList = () => {
  let [posts, setPosts] = useState([]);
  let [counter, setCounter] = useState(0);
  let [counterDisabled, setCounterDisabled] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(result => {
      setPosts(result.data);
    });
  }, []);

  useEffect(() => {
    if (counter === 3) {
      setCounterDisabled(true);
    }
  }, [counter]);

  const resetCounter = () => {
    setCounter(0);
    setCounterDisabled(false);
  };

  return (
    <>
      <Row type="flex" justify="space-around" align="top">
        <Col span={8}>
          <button
            onClick={e => setCounter(counter + 1)}
            disabled={counterDisabled}
          >
            {counter}
          </button>
          <button onClick={resetCounter}>Reset</button>
          <hr />
          <h2>Post List</h2>
          {posts.length > 0 ? (
            posts.map(p => <div key={p.id}>{p.title}</div>)
          ) : (
            <h3>loading...</h3>
          )}
        </Col>
        <pre>
            <code className="language-javascript">
                {`
                    import React, {useState, useEffect} from 'react';
                    import axios from 'axios';
                    
                    const PostList = () => {
                    
                        let [posts, setPosts] = useState([]);
                        let [counter, setCounter] = useState(0);
                        let [counterDisabled, setCounterDisabled] = useState(false);
                    
                        useEffect(() => {
                            axios
                                .get('https://jsonplaceholder.typicode.com/posts')
                                .then(result => {
                                    setPosts(result.data);
                                })
                        }, []);
                    
                        useEffect(() => {
                            if (counter === 3) {
                                setCounterDisabled(true);
                            }
                        }, [counter])
                    
                        const resetCounter = () => {
                            setCounter(0);
                            setCounterDisabled(false);
                        }
                    
                        return (
                            <> 
                            <button onClick={e => setCounter(counter + 1)} disabled={counterDisabled}>{counter}</button>
                            <button onClick={resetCounter}>Reset</button>
                            <hr/>
                            <h2>Post List</h2>
                            {
                                posts.length > 0 ? (posts.map(p => <div key={p.id}>{p.title}</div>)) : (
                                    <h3>loading...</h3>
                                )
                            }
                            </>
                         );
                     }
                     
                    export default PostList;
                `}
            </code>
        </pre>
      </Row>
    </>
  );
};

export default PostList;
