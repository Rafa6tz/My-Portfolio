import React from 'react'

const Nav = () => {
  return (
    <nav className='cabin-sketch p-4 bg-white fixed flex items-center top-0 left-0 w-screen h-20 border-b-2 border-dashed border-gray-300 shadow-xl z-30'>
        <div className='px-16 font-bold md:text-2xl w-1/3'>
            Rafael Seitz
        </div>
        <div className='w-full md:flex-nowrap flex-wrap gap-2 flex justify-around md:text-xl text-xs'>
            <a className='md:p-2 p-1 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer'>Sobre Mim</a>
            <a className='md:p-2 p-1 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer'>Projetos</a>
            <a className='md:p-2 p-1 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer'>Habilidades</a>
            <a className='md:p-2 p-1 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer'>Contato</a>
        </div>
    </nav>
  )
}

export default Nav