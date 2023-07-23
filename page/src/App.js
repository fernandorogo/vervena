import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './view/Home'
import About from './view/About'
import Contacts from './view/Contacts.jsx'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contacts' element={<Contacts/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
