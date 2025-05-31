import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    {/* <a href="/">
          HOME
        </a> */}
                    <NavLink to={"/"} className={({ isActive }) =>
                        isActive ? "activeLink" : "navLink"
                    } >Home</NavLink>
                </li>

                <li>
                    <NavLink to="/about" className={({ isActive }) =>
                        isActive ? "activeLink" : "navLink"

                    } >About</NavLink>
                </li>

                <li>
                    <NavLink to="/contact" className={({ isActive }) =>
                        isActive ? "activeLink" : "navLink"

                    } >Contact</NavLink>

                </li>
            </ul>
        </div>
    )
}

export default Navbar