import './App.css';
import Navigation from './components/navigation';
import ListenNowOverlay from './components/listen-now-overlay';

function App() {
  return (
    <div className="flex relative text-center">
      <div className="bg-slate-800 bg-blend-overlay h-screen bg-cover bg-[url('/img/as-cover-no-title.png')]">
        <Navigation/>
        <div className="flex flex-col flex-grow place-content-center">
          <div className="mx-auto w-full max-w-6xl pb-10 lg:py-12 lg:px-8">
            <ListenNowOverlay/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
