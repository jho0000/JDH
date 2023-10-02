import { NavLink } from 'react-router-dom';

export function Navbar () {
return (
    <nav>
        <div class="navbar">
            <a href="/home"><img class="logo" src="/img/JHlogo.png" alt="Logo"></img></a>
            <ul class="nav align-items-center">
                <li><NavLink to='/home'><h3>Home</h3></NavLink></li>
                <li><NavLink to='/about'><h3>About</h3></NavLink></li>
                <li><NavLink to='/projects'><h3>Projects</h3></NavLink></li>
                <a href="/img/JohnHoResume2023.pdf" target="_blank" rel="noopener noreferrer"><button type="button"><h2>Resume</h2></button></a>
            </ul>
        </div>
    </nav>
    )
}