import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavClass } from './Navbar';

function Nav(Props) {

    const nav = [
        {
            key: 1,
            name: 'Home',
            path: '#home',
        },
        {
            key: 2,
            name: 'About',
            path: '#about',
        },
        {
            key: 3,
            name: 'Services',
            path: '#services',
        },
        {
            key: 4,
            name: 'Skills',
            path: '#skills',
        },
        {
            key: 5,
            name: 'Contact',
            path: '#contact',
        },
    ];
    const navClass = useContext(NavClass);
    return (
        <>
            <ul className={navClass}>
                {nav.map((val) => {
                    return (
                        <li>
                            {/* <NavLink activeClassName="active-class" exact to={val.path}>{val.name}</NavLink> */}
                            <a activeClassName="active-class" href = {val.path}>{val.name}</a>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Nav;