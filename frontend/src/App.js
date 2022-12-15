import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar"
import {Allroutes} from "./allroutes/allrout";
function App() {
  return (
    <div className="App" >
     <Navbar />
     <Allroutes/>
    </div>
  );
}

export default App;
