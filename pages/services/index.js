



import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'


import {motion} from 'framer-motion'
import {FadeIn, fadeIn} from '../../variants'



const Services = () => {
  return ( 
  <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
            {/* text */}
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left left mb-4
            xl:mb-0'>
              <motion.h2 
                variants={fadeIn('up',0.2)} 
                initial="hidden" 
                animate="show" 
                exit="hidden" 
                className='h2 xl:mt-8 mb-16'
              >
                我們的服務 <span className='text-accent'></span>              
              </motion.h2>
              <motion.p 
                variants={fadeIn('up',0.4)} 
                initial="hidden" 
                animate="show" 
                exit="hidden" 
                className='mb-0 max-w-[400px] mx-auto lg:mx-0 text-white'
              >
                我們所提供的購買服務不僅僅是一次交易 更是一份信任的承諾
                我們深知顧客的需求 並致力於提供最優質的產品和服務 確保每位顧客都能獲得滿意的購物體驗
                我們以專業和誠信為基石 持續努力 讓您放心選擇我們
                </motion.p>
            </div>
             {/* slider */}
            <motion.div 
               variants={fadeIn('down',0.6)} 
               initial="hidden" 
               animate="show" 
               exit="hidden" 
              className='w-full xl:max-w-[65%]'
            >      
            <ServiceSlider />
            </motion.div>
            
        </div>
      </div>
      <Bulb />
  </div>
  );
};


export default Services;
