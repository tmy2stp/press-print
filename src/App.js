import logo from './logo.svg';
import './App.scss';
import Print from './pages/Print';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import About from './components/About/About';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/print" element={<Print />}></Route>
        <Route path="/about" element={<About />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
