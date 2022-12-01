import './App.css';
import Navigation from './components/navigation';
import ListenNowOverlay from './components/listen-now-overlay';

function App() {
  return (
    <div className="text-center">
      <img src="img/as-cover-no-title.png" alt="Andromeda Sinned cover art" className="bg-slate-800 bg-blend-overlay h-screen bg-cover"/>
      <Navigation/>
      <ListenNowOverlay/>
      
    </div>
  );
}

export default App;
