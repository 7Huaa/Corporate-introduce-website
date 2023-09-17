import Image from "next/image"

import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'


import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const Home = () => {
  return <div className='h-full'>
    {/*text*/}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 
    to-black/10 ">
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left 
      h-full container mx-auto '>
        {/*title*/}
        <motion.h1 
          variants={fadeIn('down',0.2)} 
          initial="hidden" 
          animate="show"
          exit='hidden'
       
          className='h1'
        >
          最值得信賴的 <br />
          <span className='text-accent'>嬰兒搖籃製造商</span>
        </motion.h1>
        {/* subtitle */}
        <motion.p
          variants={fadeIn('down',0.3)} 
          initial="hidden" 
          animate="show"
          exit='hidden' 
       
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:mb-12 z-0 text-white'
          >
          自五十年前紮根於嘉義 我們是手工嬰兒搖籃製造業的翹楚 堅固耐用是我們的品牌精神
          嬰兒的安全與舒適是我們的初衷 我們的工匠們將用心雕琢每一件搖籃 傳承著匠人精神
          讓每一個寶寶都能安心入夢 我們深深明白 搖籃不僅僅是一件傢俱 更是家的一部分
          承載著溫暖與愛的象徵 選擇我們 就是選擇了一份信任 一份品質 一份家的溫暖
          與我們一同走過五十年的時光 感受那份由心而生的溫情
        </motion.p>
        {/*btn*/}
        <div className='flex justify-center  xl:hideen relative'>
          
        </div>
        <motion.div 
          variants={fadeIn('down',0.4)} 
          initial="hidden" 
          animate="show"
          exit='hidden'
          className='flex xl:hideen relative mt-2 '
          >
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    {/* image */}
    <div className='w-[1200px] h-full absolute right-0 bottom-0 '>
      {/*bg img*/}
      
       <motion.div 
       variants={fadeIn('up',0.6)} 
       initial="hidden" 
       animate="show"
       exit='hidden'
       transition={{duration:1,ease:'easeInOut'}}
       className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right 
       xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
      </motion.div>   
        {/* particles*/}
        {/*<ParticlesContainer />*/}
        {/* avatar img */}
        <motion.div 
        variants={fadeIn('up',0.5)} 
        initial="hidden" 
        animate="show"
        exit='hidden'
        transition={{duration:1,ease:'easeInOut'}}
        className='w-full h-full max-w-[800px] max-h-[675px] absolute -bottom-32 
        lg:bottom-[-8.5%] lg:right-[4%]'>
          <Avatar />
        </motion.div>
     </div>
  </div>;
};

export default Home;
