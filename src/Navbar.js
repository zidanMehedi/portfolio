import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import nav from './Nav';

function Navbar() {

  const [navClass, setNavClass] = useState('navbar')
  const [menuToggle, setMenuToggle] = useState({
    listClass: 'menu',
    button: <MenuRoundedIcon style={{ color: '#fff' }} />,
    toggleStatus: false,
  });

  const toggleMenu = () => {

    if (menuToggle.toggleStatus == false) {
      setMenuToggle((preValue) => {
        return {
          listClass: 'menu active',
          button: <CloseRoundedIcon style={{ color: '#fff' }} />,
          toggleStatus: !preValue.toggleStatus,
        }
      });
    } else if (menuToggle.toggleStatus == true) {
      setMenuToggle((preValue) => {
        return {
          listClass: 'menu',
          button: <MenuRoundedIcon style={{ color: '#fff' }} />,
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
useEffect(()=>{

  let path = document.getElementsByClassName("url");
  let logoPath = document.getElementById("logo");
  let service = document.getElementById("services");
  let about = document.getElementById("about");
  let skill = document.getElementById("skills");
  let contact = document.getElementById("contact");

  path[0].addEventListener('click',(event)=>{
    event.preventDefault();
    window.scrollTo(0, 0);
  });
  path[1].addEventListener('click',(event)=>{
    event.preventDefault();
    window.scrollTo(0, about.offsetTop-60);
  });
  path[2].addEventListener('click',(event)=>{
    event.preventDefault();
    window.scrollTo(0, service.offsetTop-127);
  });
  path[3].addEventListener('click',(event)=>{
    event.preventDefault();
    window.scrollTo(0, skill.offsetTop-60);
  });
  path[4].addEventListener('click',(event)=>{
    event.preventDefault();
    window.scrollTo(0, contact.offsetTop-30);
  });

  logoPath.addEventListener('click', (event)=>{
    window.scrollTo(0, 0);
  })
  
},[])
  

  return (
    <>
      <nav className={navClass}>
        <div className='max-width'>
          <div className='logo' id = 'logo'><a href='localhost:3000/portfolio/#'>zidan<span>Mehedi</span></a></div>

          <ul className={menuToggle.listClass}>
            {nav.map((val, index) => {
              return (
                <li key={index}>
                  <a className = "url" onClick={toggleMenu} href={val.path}>{val.name}</a>
                </li>
              );
            })}
          </ul>

          <div className='menu-btn'>
            <IconButton onClick={toggleMenu} aria-label="MenuRoundedIcon">
              {menuToggle.button}
            </IconButton>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;