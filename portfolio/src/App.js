/* Page components */
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';

/* Main pages */
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';

/* Project pages */
import ProjectPage from './pages/ProjectPage.js';

/* Packages */
import { Route, Routes, useParams } from 'react-router-dom';

function App () {
    return (
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/home" element={<Home/>}> </Route>
                <Route path="/about" element={<About/>}> </Route>
                <Route path="/projects">
                    <Route path="" element={<Projects/>}></Route>
                    <Route path=":projectid" element={<ProjectPage/>}/>
                </Route>
            </Routes>
            <Footer></Footer>
        </div>
    )
}

export default App;