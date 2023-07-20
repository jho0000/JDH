import { NavLink } from 'react-router-dom';

export function Navbar () {
return (
    <nav>
        <div class="navbar">
            <img src="img/JHlogo.png" alt="Logo"></img>
            <ul>
                <li><NavLink to='/home'><h1>Home</h1></NavLink></li>
                <li><NavLink to='/about'><h1>About</h1></NavLink></li>
                <li><NavLink to='/projects'><h1>Projects</h1></NavLink></li>
                <button type="button">Resume</button> 
            </ul>
        </div>
    </nav>
    )
}