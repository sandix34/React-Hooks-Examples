import React, { useReducer, useState} from 'react';

const calculatorReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return { a: action.a, b: action.b, total: action.a + action.b, operation: 'ADD' };
        case 'MULTIPLY':
            return { a: action.a, b: action.b, total: action.a * action.b, operation: 'MULT' };
        case 'DIVIDE':
            return { a: action.a, b: action.b, total: action.a / action.b, operation: 'DIV' };
    }
}

const Calculator = () => {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [state, dispatch] = useReducer(calculatorReducer, {a, b});

    const changeA = (e) => {
        setA(Number(e.target.value));
    }

    const changeB = (e) => {
        setB(Number(e.target.value));
    }

    return ( 
        <div>
            <input type="text" value={a} onChange={changeA}/>
            <input type="text" value={b} onChange={changeB}/>
        </div>
     );
}
 
export default Calculator;