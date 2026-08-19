import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    };

    const decrement = () => {
        setCount(prev => prev - 1);
    };

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={decrement}>
                -
            </button>

            <button onClick={increment}>
                +
            </button>
        </div>
    );
}

export default Counter;