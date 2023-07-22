/* Page components */
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';

/* Main pages */
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';

/* Project pages */
import Moments from './pages/Moments.js';
import Musicroom from './pages/Musicroom.js';
import Scoolwise from './pages/Scoolwise.js';
import sleepsee from './pages/sleepsee.js';
import SPS from './pages/SPS.js';

/* Packages */
import { Route, Routes, useParams } from 'react-router-dom';



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