import React, { useState, useEffect, createContext } from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Nav from './Nav'

const NavClass = createContext();

function Navbar() {
  const [navClass, setNavClass] = useState('navbar')
  const [menuToggle, setMenuToggle] = useState({
    listClass: 'menu',
    menuButton: <MenuRoundedIcon style={{ color: '#fff' }} />,
    toggleStatus: false,
  });

  const toggleMenu = () => {
    if (menuToggle.toggleStatus == false) {
      setMenuToggle((preValue) => {
        return {
          listClass: 'menu active',
          menuButton: <CloseRoundedIcon style={{ color: '#fff' }} />,
          toggleStatus: !preValue.toggleStatus,
        }
      });

    } else if (menuToggle.toggleStatus == true) {
      setMenuToggle((preValue) => {
        return {
          listClass: 'menu',
          menuButton: <MenuRoundedIcon style={{ color: '#fff' }} />,
          toggleStatus: !preValue.toggleStatus,
        }
      });

    }
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      setNavClass('navbar stickyNav');
    } else {
      setNavClass('navbar');
    }
  });

  return (
    <>
      <nav className={navClass}>
        <div className='max-width'>
          <div className='logo'><NavLink activeClassName="active-class" exact to='#'>Portfo<span>lio.</span></NavLink></div>

          <NavClass.Provider value={menuToggle.listClass}>
            <Nav />
          </NavClass.Provider>

          <div className='menu-btn'>
            <IconButton onClick={toggleMenu} aria-label="MenuRoundedIcon">
              {menuToggle.menuButton}
            </IconButton>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
export { NavClass };