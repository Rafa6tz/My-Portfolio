

const Projects = () => {
  return (
    <section className='min-h-screen md:pl-20 pt-28 pl-14 min-w-full overflow-hidden flex flex-col md:gap-12 gap-6 items-center'>
        <h3 className='text-3xl font-bold cabin-sketch'>Projetos</h3>
        <div className='w-4/5 border-2 border-dashed border-blue-300 bg-white p-4 rounded-xl z-30 rotate-1 md:shadow-2xl'>
            <div className='flex gap-2 items-center mb-2'>
                <div className='w-4 h-4 rounded-full bg-blue-500'/>
                <p className='cabin-sketch text-xl'>Authenticated To-Do</p>
            </div>
            <p className='coming-soon'>To-do completo com autenticação</p>
            <div className='flex flex-wrap justify-around gap-4 py-4'>
                <p className='bg-blue-100 text-blue-400 p-1 px-4 rounded-2xl'>React</p>
                <p className='bg-blue-100 text-blue-400 p-1 px-4 rounded-2xl'>Node</p>
                <p className='bg-blue-100 text-blue-400 p-1 px-4 rounded-2xl'>Tailwind</p>
                <p className='bg-blue-100 text-blue-400 p-1 px-4 rounded-2xl'>PostgreSQL</p>
                <p className='bg-blue-100 text-blue-400 p-1 px-4 rounded-2xl'>Typescript</p>
            </div>
        </div>
        <div className='w-4/5 border-2 border-dashed border-green-300 bg-white p-4 rounded-xl z-30 -rotate-0.5 md:shadow-2xl'>
            <div className='flex gap-2 items-center mb-2'>
                <div className='w-4 h-4 rounded-full bg-green-500'/>
                <p className='cabin-sketch text-xl'>Support Tickets</p>
            </div>
            <p className='coming-soon'>Aplicação para criação e acompanhamento de Tickets com suporte</p>
            <div className='flex flex-wrap justify-around gap-4 py-4'>
                <p className='bg-green-100 text-green-400 p-1 px-4 rounded-2xl'>React</p>
                <p className='bg-green-100 text-green-400 p-1 px-4 rounded-2xl'>Node</p>
                <p className='bg-green-100 text-green-400 p-1 px-4 rounded-2xl'>Tailwind</p>
                <p className='bg-green-100 text-green-400 p-1 px-4 rounded-2xl'>MongoDB</p>
                <p className='bg-green-100 text-green-400 p-1 px-4 rounded-2xl'>Redux</p>
            </div>
        </div>
    </section>
  )
}

export default Projects