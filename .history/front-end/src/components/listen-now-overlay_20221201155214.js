import React from "react";
import LandingPageButton from "./landing-page-button";

const ListenNowOverlay = () => {
    return (
        <div className="font-playfair tracking-widest text-amber-200-accent">
            <h1 className="text-[40px]">Andromeda Sinned</h1>
            <h2 className="text-4xl mb-4">Debut Song Out Now</h2>
            <LandingPageButton url="https://www.lanadelrey.com/" />
        </div>
    );
}

export default ListenNowOverlay;