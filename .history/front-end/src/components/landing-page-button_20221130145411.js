import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageButton = props => {
    return (
        <div>
            <button type="button">
                <a href={props.url}>props</a>
            </button>
        </div>
    )
}

export default LandingPageButton;