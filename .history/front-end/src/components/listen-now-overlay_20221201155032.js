import React from "react";
import LandingPageButton from "./landing-page-button";

const ListenNowOverlay = () => {
    return (
        <div className="font-playfair">
            <h1 className="text-[39px] text-slate-300">Andromeda Sinned</h1>
            <h2 className="text-4xl text-slate-300 mb-4">Debut Song Out Now</h2>
            <LandingPageButton url="https://www.lanadelrey.com/" />
        </div>
    );
}

export default ListenNowOverlay;