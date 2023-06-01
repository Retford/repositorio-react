import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
  return (
    <>
      <section className='my-0 flex flex-col lg:flex-row justify-evenly'>
        <div className='p-10 lg:w-[65%] lg:self-center'>
          <h1
            id='me'
            className='text-sky-600 text-2xl font-bold tracking-widest leading-10'
          >
            Hola, soy
          </h1>
          <p className='py-2 text-3xl font-bold text-slate-600 '>
            Franzua Antezano
          </p>
          <p className='text-3xl font-bold text-slate-500 '>
            Desarrollador FrontEnd
          </p>
          <p className='mt-5 text-lg text-white'>
            Soy ingeniero de Sistemas que se especializa en el desarrollo
            FronEnd en aplicacioens web. Actualmente, estoy enfocado en crear
            proyectos para aprender más acerca de este mundo del desarrollo web
          </p>
          {/* REDES SOCIALES */}
          <div className='py-6 flex justify-evenly text-white lg:justify-start lg:gap-8'>
            <a href='#' className='pr-2 text-2xl hover:text-[#1DA1F2]'>
              <BsTwitter />
            </a>
            <a href='#' className='pr-2 text-2xl hover:text-[#E1306C]'>
              <BsInstagram />
            </a>
            <a href='#' className='pr-2 text-2xl hover:text-[#0e76a8]'>
              <BsLinkedin />
            </a>
            <a href='#' className='pr-2 text-2xl hover:text-[#333]'>
              <BsGithub />
            </a>
          </div>
          <div className='flex justify-center mt-1 mb-6 lg:justify-start'>
            <a
              href='#'
              className='rounded bg-white p-4 text-black hover:bg-transparent hover:text-white hover:border-white hover:border-2 hover:transition-colors'
            >
              Descargar CV
            </a>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img
            src='/img/profile.jpg'
            width='290'
            alt='profile'
            className='rounded-xl md:w-80'
          />
        </div>
      </section>
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
