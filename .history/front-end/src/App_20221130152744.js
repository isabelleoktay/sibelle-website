import './App.css';
import LandingPageButton from './components/landing-page-button';

function App() {
  return (
    <div className='eas-cover-no-title'>
      <h1 className="text-3xl text-sky-300 font-bold font-playfair underline">
        Hello world!
      </h1>
      <LandingPageButton url="https://www.lanadelrey.com/"/>
    </div>
  );
}

export default App;
