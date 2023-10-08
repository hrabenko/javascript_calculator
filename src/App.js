import './App.css';
import {useState} from "react";

function App() {
    const [display, setDisplay] = useState('0');

    const handleNumber = (event) => {
        const number = event.target.textContent;
        if (display === '0' || typeof display == 'number') {
            setDisplay(number);
        } else {
            setDisplay(display + number);
        }
    }

    const handleClear = () => {
        setDisplay("0");
    }

    const handleOperator = (event) => {
        const operator = event.target.textContent;
        // 5 *  + 5 -> 10 замість 25

        const array = String(display).split(' ');
        const lastElement = array[array.length - 1];
        if (lastElement === '' && operator === '-') {
            setDisplay(display + ' ' + operator + ' ');
        } else if (lastElement === '') {
            while (array[array.length - 1] === '') {
                array.pop();
                array.pop();
            }
            array.push(operator)
            setDisplay(array.join(" ") + ' ');
        } else if (lastElement !== '') {
            setDisplay(display + ' ' + operator + ' ');
        }
    }

    const handleEqual = () => {
        setDisplay(eval(display));
    }

    const handleDecimal = () => {
        const array = display.split(' ');
        const lastElement = array[array.length - 1];

        if (!lastElement.includes('.') && !isNaN(parseFloat(lastElement))) {
            setDisplay(display + '.');
        }
    }

    return (
        <div className="App">
            <div className="calculator">
                <div id="display">
                    {display}
                </div>
                <div id="keys">
                    <div id="clear" onClick={handleClear}>AC</div>
                    <div id="divide" onClick={handleOperator}>/</div>
                    <div id="multiply" onClick={handleOperator}>*</div>
                    <div id="seven" onClick={handleNumber}>7</div>
                    <div id="eight" onClick={handleNumber}>8</div>
                    <div id="nine" onClick={handleNumber}>9</div>
                    <div id="subtract" onClick={handleOperator}>-</div>
                    <div id="four" onClick={handleNumber}>4</div>
                    <div id="five" onClick={handleNumber}>5</div>
                    <div id="six" onClick={handleNumber}>6</div>
                    <div id="add" onClick={handleOperator}>+</div>
                    <div id="one" onClick={handleNumber}>1</div>
                    <div id="two" onClick={handleNumber}>2</div>
                    <div id="three" onClick={handleNumber}>3</div>
                    <div id="equals" onClick={handleEqual}>=</div>
                    <div id="zero" onClick={handleNumber}>0</div>
                    <div id="decimal" onClick={handleDecimal}>.</div>
                </div>
            </div>
        </div>
    );
}

export default App;
