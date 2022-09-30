import logo from './logo.svg';
import './App.scss';
import Print from './pages/Print';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Login from './components/Login/Login';
import Host from './pages/Host';
import HostModal from './components/HostModal/HostModal';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/print" element={<Print />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/host" element={<Host />}></Route>
        <Route path="/hostmodal" element={<HostModal />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
