import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Lesson1 from "./pages/lesson1/Lesson1";
import Lesson2 from "./pages/lesson2/Lesson2";

import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/lesson1" element={<Lesson1 />} />
          <Route path="/lesson2" element={<Lesson2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
