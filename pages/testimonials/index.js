import Testimonialslider from "../../components/TestimonialSlider"
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'


const Testimonials = () => {
  return ( 
  <div className="h-full bg-primary/30 py-32 text-center">
    <Circles />
      <div className="container mx-auto h-full flex flex-col justify-center">
          {/*title*/}          
          <motion.h2 
          variants={fadeIn('up',0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2 mb-20 xl:mb-0"
          >
            聽聽客戶們<span className="text-accent">說什麼</span>
          </motion.h2>
          {/*slider*/}          
          <motion.div
            variants={fadeIn('up',0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <Testimonialslider />
          </motion.div>
      </div>
      <Bulb />
  </div>
  );
};

export default Testimonials;
