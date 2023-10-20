import Logo from '../../assets/pictures/Logo.png';
import Triskel from '../../assets/pictures/Triskel.png';
import Marteau from '../../assets/pictures/Marteau.png';
import Chaumiere from '../../assets/pictures/Chaumiere.png';
import Parchemin from '../../assets/pictures/Parchemin.png';
import Image from '../Image';
import { Link, useLocation } from 'react-router-dom';

const navigationLinks = [
  { path: '/', text: 'Accueil', logo: Chaumiere },
  { path: '/works', text: 'Travaux', logo: Marteau },
  { path: '/contact', text: 'Contact', logo: Parchemin },
];

export default function Header() {
  const location = useLocation();

  return (
    <>
      <header className='header'>
        <div>
          <Link
            to='./'
            className='header_logo'
          >
            <Image
              className='header_logo--image'
              src={Logo}
              alt='Berthou Fiona Logo'
            />
          </Link>
          <h1 className='header_title'>Portfolio</h1>
        </div>
        <nav>
          <ul className='header_nav'>
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>
                  <span
                    className={
                      location.pathname === link.path
                        ? 'header_nav--active'
                        : ''
                    }
                  >
                    {link.text}

                    <Image
                      className='header_nav_logoLinks'
                      src={link.logo}
                      alt={link.text}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className='border'></div>
    </>
  );
}
