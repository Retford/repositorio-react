import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='bg-white md:sticky md:top-0 md:z-50 md:opacity-90'>
        <nav>
          <ul className='md:flex md:justify-center md:items-center md:gap-10 text-3xl text-black p-5 pr-10 font-mono hidden'>
            <li className='hover:text-sky-500 duration-500'>
              <Link to='/repositorio-react/'>Inicio</Link>
            </li>
            <li className='hover:text-sky-500 duration-500'>
              <Link to='/repositorio-react/projects'>Proyectos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
