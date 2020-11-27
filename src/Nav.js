import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {NavClass} from './Navbar';

function Nav() {

    const nav = ['Home', 'About', 'Skills', 'Contact'];
    const navClass = useContext(NavClass);
    return (
        <>
        <ul className={navClass}>
            {nav.map((val) => {
                return (
                    <li>
                        <NavLink activeClassName="active-class" exact to='#'>{val}</NavLink>
                    </li>
                );
            })}
        </ul>
        </>
    );
}

export default Nav;