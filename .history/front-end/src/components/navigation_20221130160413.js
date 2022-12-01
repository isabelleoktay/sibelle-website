import React from 'react';

const Navigation = (props) => {
    return (
        <nav className="font-playfair font-bold py-4 px-6 font-playfair flex flex-col text-center sm:flex-row sm:text-left sm:justify-between sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <a href="/home" className="text-6xl animate-pulse text-slate-300 hover:text-slate-50 tracking-widest"></a>
            </div>
        </nav>
    );
}

export default Navigation;