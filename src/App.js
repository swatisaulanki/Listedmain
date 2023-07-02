import { createContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Homepage from './Routes/Home/Homepage';

function App() {
  
  return (
    <div className="App">
    <Navbar/>
    <AllRoutes/>
    </div>
   
  );
}

export default App;
