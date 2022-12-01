import './App.css';
import LandingPageButton from './components/landing-page-button';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="h-screen relative">
      <div className="bg-emerald-800 bg-blend-overlay h-screen bg-cover bg-[url('/img/as-cover-no-title.png')]">
        <Navigation/>
        <LandingPageButton url="https://www.lanadelrey.com/"/>
      </div>
    </div>
  );
}

export default App;
