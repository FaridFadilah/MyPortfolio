import './App.css';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './Pages/Portfolio';
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className="font-sans  max-h-screen">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}