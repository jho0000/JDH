import { Footer } from './components/Footer.js';
import { Navbar } from './components/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import { Route, Routes } from 'react-router-dom';

function App () {
    return (
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/home" element={<Home/>}> </Route>
                <Route path="/about" element={<About/>}> </Route>
                <Route path="/projects" element={<Projects/>}> </Route>
            </Routes>
            <Footer></Footer>
        </div>
    )
}

export default App;