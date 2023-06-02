import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='bg-white sticky top-0 z-50 opacity-90'>
        <nav>
          <ul className='flex justify-center items-center gap-10 md:text-3xl text-black p-5 pr-10 font-mono text-base'>
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
