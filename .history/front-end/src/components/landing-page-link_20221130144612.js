import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageLink = props => {
    return (
        <div>
            <Link to={props.url}>{props.text}</Link>
        </div>
    )
}

export default LandingPageLink;