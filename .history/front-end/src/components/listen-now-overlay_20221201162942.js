import React from "react";
import LandingPageButton from "./landing-page-button";
import "../index.css";

const ListenNowOverlay = () => {
    return (
        <div className="font-playfair">
            <div className="bg-clip-text tracking-widest gold-gradient">
                <h1 className="text-[40px]">Andromeda Sinned</h1>
                <h2 className="text-4xl mb-4">Debut Song Out Now</h2>
            </div>
            <LandingPageButton url="https://www.lanadelrey.com/" text="Spotify"/>
        </div>
    );
}

export default ListenNowOverlay;