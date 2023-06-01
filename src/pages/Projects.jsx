import Project from '../components/Project';
const Projects = () => {
  const proyectosSemanales = [
    {
      nSemana: '01',
      descripcion: 'Es una proyecto realizado1',
      imgUrl: 'img/art.png',
      linkGitHub: 'https://github.com/',
      linkView: 'https://github.com/',
    },
    {
      nSemana: '02',
      descripcion: 'Es una proyecto realizado2',
      imgUrl: 'img/art.png',
      linkGitHub: 'https://github.com/',
      linkView: 'https://github.com/',
    },
    {
      nSemana: '03',
      descripcion: 'Es una proyecto realizado3',
      imgUrl: 'img/art.png',
      linkGitHub: 'https://github.com/',
      linkView: 'https://github.com/',
    },
    {
      nSemana: '04',
      descripcion: 'Es una proyecto realizado4',
      imgUrl: 'img/art.png',
      linkGitHub: 'https://github.com/',
      linkView: 'https://github.com/',
    },
    {
      nSemana: '05',
      descripcion: 'Es una proyecto realizado5',
      imgUrl: 'img/art.png',
      linkGitHub: 'https://github.com/',
      linkView: 'https://github.com/',
    },
    {
      nSemana: '06',
      descripcion: 'Es una proyecto realizado6',
      imgUrl: 'img/art.png',
      linkGitHub: 'https://github.com/',
      linkView: 'https://github.com/',
    },
  ];
  return (
    <>
      <h3
        id='proyectos'
        className='text-3xl text-white my-5 px-12 font-bold tracking-widest text-center'
      >
        Mis Proyectos Semanales
      </h3>
      <section className='my-12 flex flex-col items-center justify-center w-[90%] m-auto xl:grid-cols-3 lg:grid lg:grid-cols-2'>
        {proyectosSemanales.map(
          ({ nSemana, descripcion, imgUrl, linkGitHub, linkView }, index) => (
            <Project
              key={index}
              nSemana={nSemana}
              descripcion={descripcion}
              imgUrl={imgUrl}
              linkGitHub={linkGitHub}
              linkView={linkView}
            />
          )
        )}
      </section>
    </>
  );
};

export default Projects;
