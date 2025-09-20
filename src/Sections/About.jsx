import React from 'react'
import profile from '../Images/profile.jpg'

const About = () => {
  return (
    <section className='min-h-screen md:pt-28 md:pl-20 pt-24 pl-14 w-full overflow-hidden flex flex-col md:gap-12 gap-6 justify-center items-center'>
        <div className='flex flex-col md:flex-row items-center gap-4 -rotate-1 border-2 md:w-4/5 w-7/8 md:px-4 md:py-8 p-4 z-20 bg-blue-100 border-blue-300 border-dashed'>
            <img className='absolute top-0 -right-14 rotate-8 md:block hidden' width="80" height="80" src="https://img.icons8.com/carbon-copy/100/pin.png" alt="pin"/>
            <div className='flex justify-center md:w-3/5 flex-col text-center'>
                <h3 className='text-xl font-bold md:mb-4 mb-2 cabin-sketch'>Sobre Mim</h3>
                <p className='coming-soon text-sm'>Me chamo Rafael Seitz e sou desenvolvedor Full-Stack! Me apaixonei pela área por conseguir explorar minha criatividade e tirar as ideias do papel para as telas.</p>
            </div>
            <div className='md:w-2/5 flex justify-center'>
                <img src={profile} alt='profile' className='md:w-48 md:h-48 w-36 h-36 rounded-full object-cover'/>
            </div>
        </div>
        <div className='flex flex-col justify-centerp-4 gap-4 rotate-1 border-2 w-4/5 px-4 py-8 z-20 bg-yellow-100 border-yellow-300 border-dashed'>
            <img className='absolute -top-12 -left-14 rotate-270 md:block hidden' width="80" height="80" src="https://img.icons8.com/carbon-copy/100/pin.png" alt="pin"/>
            <p className='text-xl text-center font-bold mb-4 cabin-sketch'>Hobbies e Atividades Favoritas</p>
            <div className='w-full flex flex-wrap text-sm md:text-base md:flex-row flex-col md:gap-16 gap-8 justify-center items-center'>
              <div className='flex gap-2 items-center mb-2'>
                <div className='w-4 h-4 rounded-full bg-yellow-400'/>
                <p className='coming-soon'>Academia</p>
              </div>
              <div className='flex gap-2 items-center mb-2'>
                <div className='w-4 h-4 rounded-full bg-yellow-400'/>
                <p className='coming-soon'>Ukulele</p>
              </div>
              <div className='flex gap-2 items-center mb-2'>
                <div className='w-4 h-4 rounded-full bg-yellow-400'/>
                <p className='coming-soon'>Caminhada com cachorros</p>
              </div>
              <div className='flex gap-2 items-center mb-2'>
                <div className='w-4 h-4 rounded-full bg-yellow-400'/>
                <p className='coming-soon'>Jogar</p>
              </div>
              <div className='flex gap-2 items-center mb-2'>
                <div className='w-4 h-4 rounded-full bg-yellow-400'/>
                <p className='coming-soon'>Compras no Supermercado</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default About