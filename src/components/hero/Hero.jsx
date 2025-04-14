import './Hero.css'

import Vinil from '../../assets/Vinil.svg'

function Hero() {
    return (
      <>
        <div id='hero' className='
            flex 
            flex-col 
            align-center 
            w-screen  
            min-[0px]:h-[1000px]  
            min-[0px]:py-8  
            sm:min-h-[900px] 
            md:min-h-[600px] 
            rounded-t-3xl 
            bg-gray-950
            overflow-hidden
            mb-8
            '
          >
          <div className='flex h-[100%] text-white md:p-2 min-[0px]:px-4 min-[0px]:pt-10 min-[0px]:flex-col md:flex-row md:align-middle md: justify-center sm:justify-center'>
            <div className='flex flex-col min-[0px]:gap-10 sm:gap-8 md:w-[50%] md:h-[100%] min-[0px]:justify-center'>
              <div className='font-bold md:text-5xl min-[0px]:text-3xl text-center ml-10'>
                <h1>Nós <u className='text-[#E60076]'>revolucionamos</u> a forma com que você ouve música.</h1>
              </div>
              <div className='flex text-2xl text-center'>
                <h2>Com o aplicativo Luvelt Melodia, milhões de artistas e músicas estão apenas alguns toques de distância</h2> 
              </div>
            </div>
            <div className='flex flex-row md:w-[50%] md:h-[100%] sm:justify-center'>
              <img className="spinning-vinil w-[600px] h-[600px] min-[0px]:mt-0 sm:mt-30" src={Vinil}></img>
            </div>
          </div>
        </div>
      </>
    )
  }
  
export default Hero
  