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