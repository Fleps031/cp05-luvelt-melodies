import './Hero.css'

import Vinil from '../../assets/Vinil.svg'

function Hero() {
    return (
      <>
        <div className='
            flex 
            flex-col 
            align-center 
            w-screen  
            min-[0px]:h-[600px]  
            min-[0px]:py-8  
            sm:min-h-[900px] 
            md:min-h-[600px] 
            rounded-t-3xl 
            bg-gray-950'
          >
          <div className='flex h-[100%] text-white md:p-8 sm:px-4 sm:pt-8 sm:flex-col  md:flex-row md:align-middle md: justify-center'>
            <div className='flex flex-row md:w-[50%] md:h-[100%] sm:justify-center sm:align-middle font-bold md:text-5xl sm:text-3xl text-center'>
              <h1>Nós <u>revolucionamos</u> a forma com que você ouve música.</h1>
            </div>
            <div className='flex flex-row md:w-[50%] md:h-[100%]'>
              <img className="spinning-vinil w-[100%] h-[100%]" src={Vinil}></img>
            </div>
          </div>
        </div>
      </>
    )
  }
  
export default Hero
  