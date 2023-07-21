import { NavLink } from 'react-router-dom';

export function Navbar () {
return (
    <nav>
        <div class="navbar">
            <img src="img/JHlogo.png" alt="Logo"></img>
            <ul class="nav justify-content-end">
                <li><NavLink to='/home'><h2>Home</h2></NavLink></li>
                <li><NavLink to='/about'><h2>About</h2></NavLink></li>
                <li><NavLink to='/projects'><h2>Projects</h2></NavLink></li>
                <button type="button"><h2>Resume</h2></button> 
            </ul>
        </div>
    </nav>
    )
}