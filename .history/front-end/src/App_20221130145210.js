import './App.css';
import LandingPageButton from './components/landing-page-button';

function App() {
  return (
    <div>
      <h1 className="text-3xl text-sky-300 font-bold underline">
        Hello world!
      </h1>
      <LandingPageLink url="https://www.lanadelrey.com/" text="Lana Del Rey's Website"/>
    </div>
  );
}

export default App;
