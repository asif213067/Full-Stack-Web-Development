import React from 'react'
import Counter from '../components/Counter';


const DashBoard = () => {

    console.log('This is from Dashboard');

  return (
    <div>
        <h2 className="text-3xl">
            This is my Dashboard.
        </h2>

        <Counter />

        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
  )
}

export default DashBoard