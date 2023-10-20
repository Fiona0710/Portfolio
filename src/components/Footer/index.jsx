import Image from '../Image';
import imgFooter from '../../data';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className='border'></div>
      <footer className='footer'>
        <div className='footer_button'>
          {imgFooter.map((img, index) => (
            <Image
              key={index}
              className={'footer_img'}
              src={img.src}
              alt={img.alt}
            />
          ))}
        </div>
        <span>© 2023 Berthou Fiona. Tous droits reserves.</span>
        <div className='footer_button'>
          <Link
            to='https://github.com/Fiona0710/Portfolio'
            target='_blank'
            rel='noopener noreferrer'
            className='button'
          >
            Code de mon portfolio
          </Link>
        </div>
      </footer>
    </>
  );
}
