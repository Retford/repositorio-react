import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
  return (
    <>
      <section className='mb-10 md:my-10 flex flex-col lg:flex-row justify-center items-center'>
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
          <p className='mt-5 text-lg text-white lg:w-3/4'>
            Soy estudiante de noveno semestre de la Facultad de Ingeniería de
            Sistemas que se especializa en el desarrollo FronEnd en aplicacioens
            web. Actualmente, estoy enfocado en crear proyectos para aprender
            más acerca de este mundo del desarrollo web
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
          <div className='flex justify-center my-6 lg:justify-start animate-bounce'>
            <a
              href='#'
              className='rounded bg-white p-4 text-black hover:bg-transparent hover:text-white hover:outline-none hover:outline-white hover:transition-colors'
            >
              Descargar CV
            </a>
          </div>
        </div>
        <div className='flex justify-center items-center relative h-full'>
          <img
            src='img/profile.jpg'
            width='290'
            alt='profile'
            className='rounded-xl md:w-96 animate-pulse'
          />
        </div>
      </section>
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
