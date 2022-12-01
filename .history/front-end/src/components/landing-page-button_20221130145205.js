import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageButton = props => {
    return (
        <div>
            <Link to={props.url}>{props.text}</Link>
        </div>
    )
}

export default LandingPageButton;