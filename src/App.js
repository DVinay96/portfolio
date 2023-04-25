import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import Layout from './components/Layout.js';
import MyWork from './pages/MyWork';
import Contact from './pages/Contact';
import About from './pages/About';
import SneakerBlog from './pages/SneakerBlog';
import Music from './pages/Music';
import Gaming from './pages/Gaming';
import Coding from './pages/Coding';
import Food from './pages/Food';
import Sneakers from './pages/Sneakers';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />}>
              <Route path='/about/music' element={<Music />} />
              <Route path='/about/food' element={<Food />} />
              <Route path='/about/gaming' element={<Gaming />} />
              <Route path='/about/Sneakers' element={<Sneakers />} />
              <Route path='/about/Coding' element={<Coding />} />
            </Route>
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
