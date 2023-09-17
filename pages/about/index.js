import React,{useState} from 'react'


// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: '產品類型',
    info: [
      {
        title: '手動搖籃',
        stage: '#668 , #F16 , #777',
      },
      {
        title: '電動搖籃',
        stage: '#S-16',
      },
    ],
  },
  {
    title: '產品特色',
    info: [
      {
        title: '安全舒適設計',
        stage: '採用人體工學設計 提供寶寶一個安全舒適的睡眠環境',
      },
      {
        title: '耐用品質保證',
        stage: '精選優質材料製作 堅固耐用 確保嬰兒搖籃的持久使用壽命',
      },
    ],
  },
  {
    title: '產品壽命',
    info: [
      {
        title: '手動搖籃',
        stage: '客戶最長使用過十年到現在都還能繼續使用 堅固耐用的最佳代表',
      },
      {
        title: '電動搖籃',
        stage: '電動產品平均壽命皆有五年以上 一台足以陪伴整個童年',
      },
    ],
  },
  {
    title: '產品檢驗',
    info: [
      {
        title: '搖籃檢驗',
        stage: '作為嬰兒搖籃製造業的先驅 我們以引領者的姿態 成為了首個通過嚴格檢驗的唯一廠商',
      },     
    ],
  },
];

//components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'


//counter
import CountUp from 'react-countup'

const About = () => {
  const [index, SetIndex]=useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/*avatar img*/}
      <motion.div 
        variants={fadeIn('right',0.2)} 
        initial="hidden" 
        animate="show" 
        exit="hidden" 
        className='w-full h-full max-w-[500px] max-h-[500px] absolute -bottom-32 
        lg:bottom-[-15.5%] lg:right-[20%]'
        >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row 
      gap-x-6 pt-24'>
        {/*text*/}
        <div className='flex-1 flex flex-col justify-center'>
             <motion.h2
             variants={fadeIn('right',0.2)} 
             initial="hidden" 
             animate="show" 
             exit="hidden"  
             className='h1'>
              培育<span className='text-accent'>溫馨</span> <br />
              編織<span className='text-accent'>夢想</span>
             </motion.h2>
            <motion.p
            variants={fadeIn('right',0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"  
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-3 px-2 xl:px-0 text-white'
            >
              半個世紀以前 我們在嘉義開啟了製作搖籃的旅程 
              爺爺在五十年前以白手起家的決心 創立了這家工廠 他將心血注入其中 堅持以最優質的
              工藝製作每一張搖籃 這也成為了我們家族的傳統 堅固耐用一直是我們的品牌精神 我們以此贏得了顧客的信賴
              
            </motion.p>  
            {/* counters */}
            <motion.div 
            variants={fadeIn('right',0.6)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
              <div className='flex flex-1 xl:gap-x-6 mt-10'>
                {/*experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={50} duration={5} /> +
                  </div>
                  <div className=' text-sm uppercase tracking-[1px] leading-[1.4]
                  max-w-[100px]'>
                    多年的老經驗
                  </div>
                </div>
                {/*clients*/}
                <div className='relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={250} duration={5} /> +
                  </div>
                  <div className='text-sm uppercase tracking-[1px] leading-[1.4]
                  max-w-[100px]'>
                    滿意的客戶
                  </div>
                </div>
                {/*projects*/}
                <div className='relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={999} duration={5} /> +
                  </div>
                  <div className='text-sm uppercase tracking-[1px] leading-[1.4]
                  max-w-[100px]'>
                    外銷件數
                  </div>
                </div>
                {/*awards*/}
                <div className='relative flex-1'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={10} duration={5} /> +
                  </div>
                  <div className='text-sm uppercase tracking-[1px] leading-[1.4]
                  max-w-[100px]'>
                    合作廠商
                  </div>
                </div>
              </div>
            </motion.div>        
        </div>
        {/*info*/}
        <motion.div 
          variants={fadeIn('left',0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((item,itemIndex)=>{
                return (
                  <div key={itemIndex} 
                  className={`${
                  index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                  cursor-pointer capitalize xl:text-lg relative after:w-8 
                  after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                   onClick={()=>SetIndex(itemIndex)}
                  >
                  {item.title}
                  </div>
                );
              })}
            </div>  
            <div className=' py-2 xl:py-6 flex flex-col gap-y-2 
            xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item,itemIndex)=>{
                  return ( 
                    <div key={itemIndex} className='flex-1 flex flex-col md:flex-row
                    max-w-max gap-x-2 items-center  text-white'>
                      {/* title */}
                      <div className='font-light mb-2 md:mb-0 whitespace-nowrap'>{item.title}</div>
                      <div className='hidden md:flex'>-</div>
                      <div>{item.stage}</div>
                      <div className='flex gap-x-4'>
                        {/*icons
                        {item.icons?.map((icon,itemIndex)=>{
                        return <div className='text-2xl text-white'>{icon}</div> 
                                 
                      })}*/}
                      </div>
                  </div>
                );
              })}
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
