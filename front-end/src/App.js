import './App.css';
import Header from './components/header';
import ListenNowOverlay from './components/listen-now-overlay';

function App() {
  return (
    <div className="relative text-center bg-slate-800 bg-blend-overlay h-screen bg-center bg-cover bg-[url('/img/as-cover-no-title.png')]">
      <div>
        <Header/>
      </div>
      <div className="grid place-items-center h-screen px-[10%]">
        <ListenNowOverlay/>
      </div>
    </div>
  );
}

export default App;
