import React from 'react';

const LandingPageButton = props => {
    return (
        <div>
            <button className="font-bold text-slate-200 py-2 px-4 font-playfair outline outline-1" type="button">
                <a href={props.url}>Click Me</a>
            </button>
        </div>
    );
}

export default LandingPageButton;