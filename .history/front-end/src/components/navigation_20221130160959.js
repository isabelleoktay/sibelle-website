import React from 'react';

const Navigation = () => {
    return (
        <nav className="font-[Times New Roman] font-bold py-4 px-6 font-playfair flex flex-col text-center sm:flex-row sm:text-left sm:justify-between sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <a href="/home" className="text-6xl animate-pulse text-slate-300 hover:text-slate-50 tracking-widest">Si Belle</a>
            </div>
            <div>
                <a href="/music" class="text-lg no-underline text-slate-300 hover:text-slate-50 ml-2">Music</a>
                <a href="/video" class="text-lg no-underline text-slate-300 hover:text-slate-50 ml-2">Video</a>
                <a href="/tour" class="text-lg no-underline text-slate-300 hover:text-slate-50 ml-2">Tour</a>
                <a href="/social" class="text-lg no-underline text-slate-300 hover:text-slate-50 ml-2">Social</a>
            </div>
        </nav>
    );
}

export default Navigation;