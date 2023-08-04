import { NavLink } from 'react-router-dom';

export function Navbar () {
return (
    <nav>
        <div class="navbar">
            <a class="logo" href="/home"><img src="/img/JHlogo.png" alt="Logo"></img></a>
            <ul class="nav align-items-center">
                <li><NavLink to='/home'><h2>Home</h2></NavLink></li>
                <li><NavLink to='/about'><h2>About</h2></NavLink></li>
                <li><NavLink to='/projects'><h2>Projects</h2></NavLink></li>
                <a href="img/TestFile.pdf" target="_blank" rel="noopener noreferrer"><button type="button"><h2>Resume</h2></button></a>
            </ul>
        </div>
    </nav>
    )
}