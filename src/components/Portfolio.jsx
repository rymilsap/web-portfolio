import React from 'react'
import ryanmilsapwebproject from '../assets/portfolio/ryanmilsapwebproject.png'


const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: ryanmilsapwebproject
    },
    
   /* {  id: 2,
      src: 
    },
   {
      id: 3,
      src: 
    },
    {
      id: 4,
      src: 
    },
    {
      id: 5,
      src: 
    },
   {
      id: 6,
      src: 
    }*/
  
    
  ]


  

  return (
    <div 
    name='portfolio'
    className='bg-gradient-to-b from-gray-800 to-black md:h-auto w-full'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-white p-2'>
            Portfolio
            </p>
          <p className='text-white py-6'>Check out some of my work</p>
        </div>

        



        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          portfolios.map(({id, src})=> (
            <div 
            key={id}
            className='shadow-md shadow-gray-600 rounded-lg'>
            <img 
            src={src} 
            alt='' 
            className='rounded-md  duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
             {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white'>
                Demo
          </button>*/}

          <a href="https://github.com/rymilsap/web-portfolio" target="_blank" rel="noopener noreferrer">
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white'>
               Code
            </button>
          </a>


              </div>
              </div>
          ))
        }
        
        </div>
      </div>
    </div>
  )
}

export default Portfolio