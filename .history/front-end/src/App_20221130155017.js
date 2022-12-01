import { getByTitle } from '@testing-library/react';
import './App.css';
import LandingPageButton from './components/landing-page-button';

function App() {
  return (
    <div className="h-screen relative">
      <div className="h-screen bg-cover bg-[url('/img/as-cover-no-title.png')]">
        <h1 className="text-3xl text-slate-400 font-bold font-playfair p-6">
          Si Belle
        </h1>
        <LandingPageButton url="https://www.lanadelrey.com/"/>
      </div>
    </div>
  );
}

export default App;
