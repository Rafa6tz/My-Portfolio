

const Abilities = () => {
  return (
    <section className='min-h-screen md:pl-20 pt-28 pl-14 min-w-full overflow-hidden flex flex-col md:gap-12 gap-6 items-center'>
        <h3 className='text-3xl text-center font-bold cabin-sketch'>Habilidades e Tecnologias</h3>
        <div className='w-4/5 border-2 border-dashed border-blue-300 bg-blue-100 p-4 px-8 rounded-xl z-30 rotate-1 md:shadow-2xl'>
            <div className='flex gap-2 justify-center items-center mb-4'>
                <p className='cabin-sketch text-2xl'>Front-End</p>   
            </div>
            <div className="flex flex-wrap justify-around gap-4 coming-soon">
                <div className="gap-2 flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500"/>
                    <p>React</p>
                </div>
                <div className="gap-2 flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500"/>
                    <p>Tailwind</p>
                </div>
                <div className="gap-2 flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500"/>
                    <p>Shadcn</p>
                </div>
                <div className="gap-2 flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500"/>
                    <p>Redux</p>
                </div>
                <div className="gap-2 flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500"/>
                    <p>Typescript</p>
                </div>
            </div>
        </div>


        <div className='w-4/5 border-2 border-dashed border-red-300 bg-red-100 p-4 px-8 rounded-xl z-30 -rotate-1 md:shadow-2xl'>
            <div className='flex gap-2 justify-center items-center mb-4'>
                <p className='cabin-sketch text-2xl'>Back-End</p>   
            </div>
            <div className="flex flex-wrap justify-around gap-4 coming-soon">
                <div className="gap-2 flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-red-500"/>
                    <p>Node</p>
                </div>
                <div className="gap-2 flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-red-500"/>
                    <p>Express</p>
                </div>
                <div className="gap-2 flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-red-500"/>
                    <p>JWT</p>
                </div>
                <div className="gap-2 flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-red-500"/>
                    <p>PostgreSQL</p>
                </div>
                <div className="gap-2 flex items-center mb-2">
                    <div className="w-4 h-4 rounded-full bg-red-500"/>
                    <p>MongoDB</p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Abilities