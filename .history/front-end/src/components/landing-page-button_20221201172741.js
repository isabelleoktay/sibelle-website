import React from 'react';

const LandingPageButton = props => {
    return (
        <div>
            <button className="font-bold text-slate-300 py-2 px-[42%] font-playfair outline outline-1" type="button">
                <a href={props.url}>{props.text}</a>
            </button>
        </div>
    );
}

export default LandingPageButton;