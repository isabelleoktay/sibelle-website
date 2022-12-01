import './App.css';
import Navigation from './components/navigation';
import ListenNowOverlay from './components/listen-now-overlay';
import asCover from './img/as-cover-no-title.png'

function App() {
  return (
    <div className="text-center">
      <img src={asCover} alt="Andromeda Sinned cover art"/>
      <Navigation/>
      <ListenNowOverlay/>
      
    </div>
  );
}

export default App;
