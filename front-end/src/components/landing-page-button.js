import React from "react";
import "../index.css";

const LandingPageButton = props => {
    return (
        <div>
            <button className="w-2/5 hover:w-3/5 transition ease-in-out delay-150 duration-300 text-lg font-bold gold-button py-3 px-2 mb-2 font-playfair outline outline-2" type="button">
                <a href={props.url} target="_blank">{props.text}</a>
            </button>
        </div>
    );
}

export default LandingPageButton;