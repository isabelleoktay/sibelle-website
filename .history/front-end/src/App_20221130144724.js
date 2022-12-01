import './App.css';
import LandingPageLink from './components/landing-page-link';

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
