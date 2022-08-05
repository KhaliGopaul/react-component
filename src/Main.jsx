import { useState } from 'react';

function Main() {
    const [count, setCount] = useState();
    const handleClick = () => setCount(count + 1);
    return (
        <main>
            <h2>Main section here...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ex aliquid non blanditiis modi ut placeat libero unde error, aliquam ad facilis, incidunt debitis! Reprehenderit ea corrupti cupiditate rem obcaecati? </p>
       <h3>Counter: {count}</h3>
       <button>
        Click Me!
       </button>
        </main>
    )
}