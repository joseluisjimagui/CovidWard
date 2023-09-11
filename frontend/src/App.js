import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Today from './components/Today';
import SpecificDate from './components/SpecificDate'

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Today />} />    
          <Route path="/SpecificDate" element={<SpecificDate />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
