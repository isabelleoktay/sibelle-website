import './App.css';
import Navigation from './components/navigation';
import ListenNowOverlay from './components/listen-now-overlay';

function App() {
  return (
    <div className="text-center">
      <img src={require('as-cover-no-title.png')} alt="Andromeda Sinned cover art"/>
      <Navigation/>
      <ListenNowOverlay/>
      
    </div>
  );
}

export default App;
