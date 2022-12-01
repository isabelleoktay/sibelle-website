import './App.css';
import Navigation from './components/navigation';
import ListenNowOverlay from './components/listen-now-overlay';

function App() {
  return (
    <div className="h-screen relative text-center">
      <div className="bg-slate-800 bg-blend-overlay h-screen bg-cover bg-[url('/img/as-cover-no-title.png')]">
        <Navigation/>
        <ListenNowOverlay className="m-auto"/>
      </div>
    </div>
  );
}

export default App;
