import { getByTitle } from '@testing-library/react';
import './App.css';
import LandingPageButton from './components/landing-page-button';

function App() {
  return (
    <div className="h-screen w-screen bg-[url('/img/as-cover-no-title.png')]">
      <h1 className="text-3xl text-sky-300 font-bold font-playfair underline">
        Hello world!
      </h1>
      <LandingPageButton url="https://www.lanadelrey.com/"/>
    </div>
  );
}

export default App;
