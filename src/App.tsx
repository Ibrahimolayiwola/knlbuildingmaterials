import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { StateContext } from './context/StateContext';
import ScrollToTop from './components/scrollToTop';
import IronRods from './pages/IronRods';
import CementSupplier from './pages/CementSupplier';

function App() {

  return (
    <>
      <StateContext>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<About />} path='/about' />
            <Route element={<Contact />} path='/contact' />
            <Route element={<IronRods />} path='/products/iron-rods-lagos' />
            <Route element={<CementSupplier />} path='/products/cement-supplier' />
          </Routes>
        </BrowserRouter>
      </StateContext>
    </>
  )
}

export default App
