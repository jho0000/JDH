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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ3fm5faRnFStvhACriqUNZthu9ET-enU",
  authDomain: "jdho-545e4.firebaseapp.com",
  projectId: "jdho-545e4",
  storageBucket: "jdho-545e4.appspot.com",
  messagingSenderId: "223268564813",
  appId: "1:223268564813:web:0b3195c58dd99800b0d104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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