import { getByTitle } from '@testing-library/react';
import './App.css';
import LandingPageButton from './components/landing-page-button';

function App() {
  return (
    <div className="h-full">
      <div className="h-full w-full bg-[url('/img/as-cover-no-title.png')]">
        <h1 className="text-3xl text-sky-300 font-bold font-playfair underline">
          Hello world!
        </h1>
        <LandingPageButton url="https://www.lanadelrey.com/"/>
      </div>
    </div>
  );
}

export default App;
