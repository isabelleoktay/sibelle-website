import React from "react";
import LandingPageButton from "./landing-page-button";
import "../index.css";

const ListenNowOverlay = () => {

    const platforms = [
        {
            text: "Spotify",
            url: "https://open.spotify.com/track/4aMrofTPkhtU4N1Isotu0I?autoplay=true",
        },
        {
            text: "Apple Music",
            url: "https://music.apple.com/us/album/andromeda-sinned/1645912234?i=1645912235",
        },
        {
            text: "Music Video",
            url: "https://www.youtube.com/watch?v=yIRf64zwh4c&ab_channel=SiBelle",
        },
        {
            text: "TikTok",
            url: "https://www.tiktok.com/@vndrxmedvwastaken?is_from_webapp=1&sender_device=pc",
        },
        {
            text: "Instagram",
            url: "https://www.instagram.com/vndrxmedv/",
        }
    ];

    return (
        <div className="font-playfair relative">
            <div className="bg-clip-text tracking-widest gold-gradient">
                <h1 className="text-[40px]">Andromeda Sinned</h1>
                <h2 className="text-4xl mb-6">Debut Song Out Now</h2>
            </div>
            <div>
                {platforms.map((platform, i) => {
                    return <LandingPageButton url={platform.url} text={platform.text} key={i}/>
                })}
            </div>
        </div>
    );
}

export default ListenNowOverlay;