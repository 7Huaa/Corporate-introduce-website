import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'


import {motion} from 'framer-motion'
import {FadeIn, fadeIn} from '../../variants'



const Work = () => {
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
                className='h2 xl:mt-8 mb-14'
              >
                我們的產品<span className='text-accent'>.</span>              
              </motion.h2>
              <motion.p 
                variants={fadeIn('up',0.4)} 
                initial="hidden" 
                animate="show" 
                exit="hidden" 
                className='mb-0 max-w-[400px] mx-auto lg:mx-0'
              >
                我們引以為傲的產品源於對品質的执著追求和對每位客戶的用心關懷
                透過精心設計和嚴格把關 我們確保每件產品都達到最優的標準
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
            <WorkSlider />
            </motion.div>
            
        </div>
      </div>
      <Bulb />
  </div>
  );
};


export default Work;
