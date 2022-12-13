import React from 'react';
import "../index.css";

const Header = () => {
    return (
        <nav className="font-playfair font-bold py-4 px-6 font-playfair text-center sm:flex-row w-full">
            <div className="mb-2">
                <a href="/home" className="gold-hover hover:duration-500 text-8xl text-slate-300">Si Belle</a>
            </div>
        </nav>
    );
}

export default Header;