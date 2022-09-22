import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
