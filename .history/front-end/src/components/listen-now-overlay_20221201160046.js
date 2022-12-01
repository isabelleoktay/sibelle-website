import React from "react";
import LandingPageButton from "./landing-page-button";

const ListenNowOverlay = () => {
    return (
        <div className="font-playfair">
            <div className="bg-clip-text bg-gradient-to-r tracking-widest text-transparent from-[#462523] via-[#cb9b51] via-[#f6e27a] via-[#f6f2c0] via-[#f6e27a] via-[#cb9b51] to-[#462523]">
                <h1 className="text-[40px]">Andromeda Sinned</h1>
                <h2 className="text-4xl mb-4">Debut Song Out Now</h2>
            </div>
            <LandingPageButton url="https://www.lanadelrey.com/" />
        </div>
    );
}

export default ListenNowOverlay;