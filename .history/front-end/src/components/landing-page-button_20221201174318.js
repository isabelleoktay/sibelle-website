import React from "react";
import "../index.css";

const LandingPageButton = props => {
    return (
        <div>
            <button className="font-bold gold-button hover:bg-slate-300  py-3 px-4 font-playfair outline outline-2" type="button">
                <a href={props.url}>{props.text}</a>
            </button>
        </div>
    );
}

export default LandingPageButton;