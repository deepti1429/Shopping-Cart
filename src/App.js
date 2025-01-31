import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from './components/Checkout';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/checkout' element={<><Header/><Checkout/></>}></Route>
        <Route path='/' element={<><Header/><Home/></>}></Route>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
