import { BsGithub } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';

const Project = ({ nSemana, descripcion, linkGitHub, linkView, imgUrl }) => {
  return (
    <div className='border-1 rounded-lg bg-white m-5 hover:animate-subida'>
      <div className='m-2'>
        <img
          src={imgUrl}
          alt='proyecto1'
          className='opacity-80 hover:opacity-100'
        />
        <h4 className='font-bold my-2'>SEMANA {nSemana}</h4>
        <article className='flex justify-between'>
          <div className='flex flex-nowrap items-center'>
            <span className='bg-slate-200 rounded-lg px-2 mr-2 text-slate-700'>
              {descripcion}
            </span>
          </div>
          <div className='text-xl text-slate-600 pr-2 flex flex-nowrap gap-4'>
            <a href={linkGitHub}>
              <BsGithub />
            </a>
            <a href={linkView}>
              <FaRegEye />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Project;
