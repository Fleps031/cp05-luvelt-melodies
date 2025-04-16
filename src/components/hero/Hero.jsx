import './Hero.css'

import Vinil from '../../assets/Vinil.svg'

function Hero() {
    return (
      <>
        <div className='
          flex 
          md:flex-row
          md:gap-0
          md:justify-around
          md:items-center
          
          min-[0px]:flex-col
          min-[0px]:gap-10
          min-[0px]:justify-center
          min-[0px]:items-center
          

          sm:p-8
          min-[0px]:p-6
         
          w-screen
          h-fit  
          min-[0px]:h-[1000px]  
          rounded-t-3xl 
          bg-gray-950
          mb-8
          flex-wrap
        '>
          <div className='w-100 h-100 flex justify-center items-center text-center md:min-w-[600px] md:w-[50%] min-[0px]:flex-grow min-[0px]:w-[100%]'>
            <div className='flex flex-col min-[0px]:agp-10 min-[0px]:gap-16 md:w-[50%] md:h-[100%] min-[0px]:justify-center sm:min-w-[800px] text-white'>
              <div className='font-bold md:text-5xl min-[0px]:text-3xl text-center ml-10'>
                <h1>Nós <u className='text-[#E60076]'>revolucionamos</u> a forma com que você ouve música.</h1>
              </div>
              <div className='flex text-2xl text-center justify-center'>
                <h2>Com o aplicativo Luvelt Melodia, milhões de artistas e músicas estão apenas alguns toques de distância</h2> 
              </div>
              <div className='flex w-full justify-center'>
                <button className='border-4 w-[40%] h-16 rounded-2xl p-2 text-2xl hover:border-[#E60076] hover:cursor-pointer hover:text-[#E60076]'>Ouvir agora</button>
              </div>
            </div>
          </div>
          <div className='w-100 h-100 flex justify-center items-center text-center md:min-w-[500px] md:w-[30%] min-[0px]:flex-grow min-[0px]:w-[100%]' >
            <div className='flex min-w-[800px] sm:h-[100%] min-[0px]:justify-center min-[0px]:items-center'>
                <img className="spinning-vinil min-[0px]:mt-0 h-180 w-180" src={Vinil}></img>
            </div>
          </div>
        </div>
        {/* <div id='hero' className='
            flex 
            flex-row 
            align-center 
            w-screen
            h-fit  
            min-[0px]:h-[1000px]  
            min-[0px]:py-8  
            rounded-t-3xl 
            bg-gray-950
            mb-8
            flex-wrap
            '
          >
          <div className='flex flex-col min-[0px]:agp-10 sm:gap-8 md:w-[50%] md:h-[100%] min-[0px]:justify-center sm:min-w-[800px] text-white'>
            <div className='font-bold md:text-5xl min-[0px]:text-3xl text-center ml-10'>
              <h1>Nós <u className='text-[#E60076]'>revolucionamos</u> a forma com que você ouve música.</h1>
            </div>
            <div className='flex text-2xl text-center justify-center'>
              <h2>Com o aplicativo Luvelt Melodia, milhões de artistas e músicas estão apenas alguns toques de distância</h2> 
            </div>
            <div className='flex w-full justify-center'>
              <button className='border-4 w-[40%] h-16 rounded-2xl p-2 text-2xl hover:border-[#E60076] hover:cursor-pointer hover:text-[#E60076]'>Ouvir agora</button>
            </div>
          </div>

          <div className='flex flex-row min-w-[800px] md:h-[100%] sm:justify-center'>
              <img className="spinning-vinil h-[600px] min-[0px]:mt-0 sm:mt-30" src={Vinil}></img>
          </div>
        </div> */}
      </>
    )
  }
  
export default Hero
  