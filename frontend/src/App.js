import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from './components/Today';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Today />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
