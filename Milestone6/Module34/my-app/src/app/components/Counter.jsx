'use client'
import React, { useState } from 'react'

const Counter = () => {

    console.log('this is from counter component');

    const [count, setCount] = useState(0);

    const handleIncreaseBtn = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2 className="text-2xl text-green-500">Counter: {count}</h2>
            <button
                onClick={handleIncreaseBtn}
                className='p-4 m-4 rounded border border-amber-300 bg-green-400'
            >
                Increase
            </button>
        </div>
    )
}

export default Counter