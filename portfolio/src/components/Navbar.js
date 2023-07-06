import { NavLink } from 'react-router-dom';

export function Navbar () {
return (
    <nav>
        <div class="navbar">
            <img src="img/JHlogo.png" alt="Logo"></img>
            <NavLink to='/home'><h1>Home</h1></NavLink>
            <NavLink to='/about'><h1>About</h1></NavLink>
            <NavLink to='/projects'><h1>Projects</h1></NavLink>
            <h1>Resume</h1>
        </div>
    </nav>
    )
}