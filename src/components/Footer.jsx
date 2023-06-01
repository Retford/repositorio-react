import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='text-center text-black bg-white'>
      <p className='hover:text-sky-500 pt-5'>
        Diseñado &amp; Desarrollado por Franzua Antezano
      </p>
      <div className='py-6 flex justify-center gap-4'>
        <a href='#' className='pr-2 hover:text-[#1DA1F2]'>
          <BsTwitter />
        </a>
        <a href='#' className='pr-2 hover:text-[#E1306C]'>
          <BsInstagram />
        </a>
        <a href='#' className='pr-2 hover:text-[#0e76a8]'>
          <BsLinkedin />
        </a>
        <a href='#' className='pr-2 hover:text-[#333]'>
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
