import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageButton = props => {
    return (
        <div>
            <button className="font-bold py-2 px-4 outline-1" type="button">
                <a href={props.url}>Click Me</a>
            </button>
        </div>
    )
}

export default LandingPageButton;