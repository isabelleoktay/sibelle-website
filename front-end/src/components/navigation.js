import React from 'react';
import "../index.css";

const Navigation = () => {
    return (
        <nav className="font-playfair font-bold py-4 px-6 font-playfair flex flex-col text-center sm:flex-row sm:text-left sm:justify-between sm:items-baseline w-full">
            <div className="mb-2">
                <a href="/home" className="gold-hover hover:duration-500 text-6xl text-slate-300">Si Belle</a>
            </div>
            {/* <div>
                <a href="/music" class="text-lg no-underline text-slate-300 gold-hover hover:duration-500 ml-2">Music</a>
                <a href="/video" class="text-lg no-underline text-slate-300 gold-hover hover:duration-500 ml-2">Video</a>
                <a href="/tour" class="text-lg no-underline text-slate-300 gold-hover hover:duration-500 ml-2">Tour</a>
                <a href="/social" class="text-lg no-underline text-slate-300 gold-hover hover:duration-500 ml-2">Social</a>
            </div> */}
        </nav>
    );
}

export default Navigation;