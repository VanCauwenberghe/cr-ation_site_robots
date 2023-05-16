import './App.css';
import Router from './components/router';
import Appbar from "./components/app-bar/Appbar";

function App() {
  return (
    <div className="App">
        <Appbar/>
        <Router/>
    </div>
  );
}

export default App;
