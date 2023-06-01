import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul className='md:flex md:justify-end md:items-center md:gap-10 bg-gray-500 text-3xl text-white p-5 pr-10 font-mono hidden'>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/projects'>Proyectos</Link>
            </li>
            <li>
              <Link to='/contact'>Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
