import React from 'react';
import '../styles/Greeter.css'

const Greeter = props => {
    return (
        <div>
            <h1 className="greeter">
                {props.phrase}, {props.name}!
            </h1>
        </div>
    )
}

export default Greeter;