import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import Layout from './components/Layout.js';
import MyWork from './pages/MyWork';
import Contact from './pages/Contact';
import About from './pages/About';
import SneakerBlog from './pages/SneakerBlog';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/work' element={<MyWork />} />
            <Route path='/blog' element={<SneakerBlog />} />




          </Route>
        </Routes>


      </BrowserRouter>


    </>

  );
}

export default App;
