import React, { useState, useEffect, useRef} from 'react';
import Prism from "prismjs";
import '../prism.css'
import { Row, Col } from "antd";


const Login = () => {
    const [login, setLogin] = useState('');
    const [message, setMessage] = useState('');
    const loginRef = useRef();

    useEffect(() => {
        console.log(loginRef);
        loginRef.current.focus();
    },[]);

    const handleChange = e => {
        setLogin(e.target.value);
    }

    const handleKeyUp = e => {
        if (e.keyCode === 13 ) {
            setMessage(`Trying to login ${login}`)
        }
    }

    return ( 
        <div>
            <Row type="flex" justify="space-around" align="middle">
                <Col span={4}>
                <input 
                    type="text" 
                    ref={loginRef} 
                    value={login} 
                    onChange={handleChange} 
                    onKeyUp={handleKeyUp} 
                    placeholder="your login" />
                    <br/>
                    {message}
                </Col>
                <pre >
                    <code className="language-javascript">
                        {`
                        import React, { useState, useEffect, useRef} from 'react';


                        const Login = () => {
                            const [login, setLogin] = useState('');
                            const [message, setMessage] = useState('');
                            const loginRef = useRef();
                        
                            useEffect(() => {
                                console.log(loginRef);
                                loginRef.current.focus();
                            },[]);
                        
                            const handleChange = e => {
                                setLogin(e.target.value);
                            }
                        
                            const handleKeyUp = e => {
                                if (e.keyCode === 13 ) {
                                    `}setMessage(`Trying to login ${`{login}`}`){`
                                }
                            }
                        
                            return ( 
                                <>
                                    <input 
                                    type="text" 
                                    ref={loginRef} 
                                    value={login} 
                                    onChange={handleChange} 
                                    onKeyUp={handleKeyUp} 
                                    placeholder="your login" />
                                    <br/>
                                    {message}
                                </>
                            );
                        }
                        
                        export default Login;  
                        `}
                    </code>
                </pre>
        </Row>
            
        </div>
     );
}
 
export default Login;