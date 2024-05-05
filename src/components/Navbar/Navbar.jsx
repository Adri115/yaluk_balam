import React,{useEffect, useState} from 'react'
import  './Navbar.css'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  
  const [sticky, setSticky] = useState(false);
  const [hide, setHide] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Set sticky navbar
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  })

  //Hide Navbar
const handleHide = () =>{
setHide(!hide)
}
  
  //Hide Navbar
  useEffect(() => {
    
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: 'fixed',
    width: '100%',
    height: '80px',
    color: '#fff',
    top: scrollPosition > 70 ? '0px' : '70px', // Ajusta el margen superior dinámicamente
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    transition: '0.5s', // Añade una transición suave para suavizar el cambio
  };

  const menuStyle = {
    top: scrollPosition > 70 ? '20px' : '-15px',
    transition: '0.3s'
  };

  return (
    <nav className={`nav-container ${sticky? 'dark-nav' : '' }`} style={navbarStyle}>
         <img src={menu_icon} className='menu-icon' onClick={handleHide} style={menuStyle}/>
        <ul className={`${hide? 'hide-mobile-menu' : ''}`}>
            <li><Link to='electraton-container' smooth={true} offset={0} duration={500}>
            <button className='btn'>ELECTRATON</button></Link> 
              </li>
            <li><Link to='us-container' smooth={true} offset={-235} duration={500}><button className='btn'>NOSOTROS</button></Link></li>
            <li><button className='btn'>PATROCINADORES</button></li>
            <li><button className='btn'>TIENDA</button></li>
            <li><button className='btn'>PATROCINANOS</button></li>
            <li><button className='btn'>CONTACTO</button></li>
        </ul>
    </nav>
  )
}

export default Navbar