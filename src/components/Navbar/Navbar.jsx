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


  const menuStyle = {
    top: scrollPosition > 70 ? '20px' : '-15px',
    transition: '0.3s'
  };

  return (
    <nav className={`nav-container ${sticky? 'dark-nav' : ''}${scrollPosition > 70 ? ' nav-moved' : ''}`}>
         <img src={menu_icon} className='menu-icon' onClick={handleHide} style={menuStyle}/>
        <ul className={`${hide? 'hide-mobile-menu' : ''}`}>
            <li><Link to='electraton-container' smooth={true} offset={0} duration={500}>
            <button className='btn'>ELECTRATON</button></Link> 
              </li>
            <li><Link to='us-container' smooth={true} offset={-90} duration={500}><button className='btn'>NOSOTROS</button></Link></li>
            <li><Link to='partners-containers' smooth={true} offset={-207} duration={500}><button className='btn'>PATROCINADORES</button></Link></li>
            <li><Link to='model-container' smooth={true} offset={-50} duration={500}><button className='btn'>ESCUDERÍA</button></Link></li>
            <li><Link to='promotes-container' smooth={true} offset={-80} duration={500}><button className='btn'>PATROCINANOS</button></Link></li>
            <li><Link to='contact-container' smooth={true} offset={-150} duration={500}><button className='btn'>CONTACTO</button></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar