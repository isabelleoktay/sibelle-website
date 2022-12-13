import React from "react";
import LandingPageButton from "./landing-page-button";
import "../index.css";

const ListenNowOverlay = () => {

    const platforms = [
        {
            text: "Spotify",
            url: "",
        },
        {
            text: "Apple Music",
            url: "",
        },
        {
            text: "Music Video",
            url: "",
        },
        {
            text: "TikTok",
            url: "",
        },
        {
            text: "Instagram",
            url: "",
        }
    ];

    return (
        <div className="font-playfair relative">
            <div className="bg-clip-text tracking-widest gold-gradient">
                <h1 className="text-[40px]">Andromeda Sinned</h1>
                <h2 className="text-4xl mb-10">Debut Song Out Now</h2>
            </div>
            <div>
                <LandingPageButton url="https://www.lanadelrey.com/" text="Spotify"/>
            </div>
        </div>
    );
}

export default ListenNowOverlay;