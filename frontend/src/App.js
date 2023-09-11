import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from './components/Today';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Today />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
