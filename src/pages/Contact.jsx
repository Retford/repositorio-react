const Contact = () => {
  return (
    <>
      <h3
        id='contact'
        className='text-3xl text-white mt-12 mb-10 px-10 font-bold tracking-widest text-center'
      >
        Contáctame
      </h3>
      <section className='flex flex-col w-[90%] m-auto my-5'>
        <form action='' className='w-[90%] md:max-w-[600px] m-auto'>
          <div>
            <input
              placeholder='info@ejemplo.com'
              type='email'
              name='email'
              id='email'
              className='p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400'
            />
          </div>
          <div className='py-3'>
            <input
              placeholder='nombre'
              type='text'
              name='nombre'
              id='nombre'
              className='p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400'
            />
          </div>
          <div>
            <textarea
              placeholder='Mensaje'
              name='msj'
              id='msj'
              rows='5'
              className='p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400'
            ></textarea>
          </div>
          <div className='my-3'>
            <button className='bg-white text-black p-3 w-full rounded-lg text-xl tracking-widest hover:bg-black hover:text-white hover:outline-none hover:outline-white'>
              Enviar Mensaje
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
