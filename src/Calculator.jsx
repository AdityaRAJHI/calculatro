import React, { useState } from 'react';
    import './Calculator.css';

    const Calculator = () => {
      const [input, setInput] = useState('');
      const [result, setResult] = useState('');

      const handleClick = (value) => {
        setInput(input + value);
      };

      const handleClear = () => {
        setInput('');
        setResult('');
      };

      const handleCalculate = () => {
        try {
          setResult(eval(input)); // Note: eval can be dangerous, use with caution
        } catch (error) {
          setResult('Error');
        }
      };

      const handleFunction = (func) => {
        try {
          let value = eval(input);
          switch (func) {
            case 'sin':
              value = Math.sin(value);
              break;
            case 'cos':
              value = Math.cos(value);
              break;
            case 'tan':
              value = Math.tan(value);
              break;
            case 'log':
              value = Math.log10(value);
              break;
            case 'ln':
              value = Math.log(value);
              break;
            case 'sqrt':
              value = Math.sqrt(value);
              break;
            case 'factorial':
              value = factorial(value);
              break;
            default:
              value = value;
          }
          setResult(value);
        } catch (error) {
          setResult('Error');
        }
      };

      const factorial = (n) => {
        if (n < 0) return 'Error';
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
          result *= i;
        }
        return result;
      };

      return (
        <div className="calculator">
          <div className="display">
            <input type="text" value={input} readOnly />
            <div className="result">{result}</div>
          </div>
          <div className="buttons">
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('+')} className="operator">+</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('-')} className="operator">-</button>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('*')} className="operator">*</button>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('.')}>.</button>
            <button onClick={handleCalculate} className="operator">=</button>
            <button onClick={() => handleClick('/')} className="operator">/</button>
            <button onClick={handleClear} className="operator">C</button>
            <button onClick={() => handleFunction('sin')} className="function">sin</button>
            <button onClick={() => handleFunction('cos')} className="function">cos</button>
            <button onClick={() => handleFunction('tan')} className="function">tan</button>
            <button onClick={() => handleFunction('log')} className="function">log</button>
            <button onClick={() => handleFunction('ln')} className="function">ln</button>
            <button onClick={() => handleFunction('sqrt')} className="function">√</button>
            <button onClick={() => handleFunction('factorial')} className="function">!</button>
            <button onClick={() => handleClick('^')}>^</button>
          </div>
        </div>
      );
    };

    export default Calculator;
