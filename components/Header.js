
import Image from 'next/image'

import Link from 'next/link'

import Socials from '../components/Socials'

const Header = () => {
  return( 
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]
    mt-3 xl:mt-10 xl:right-1'>
      <div className='container mx-auto mb-10 mt-0'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-20 py-0 '>
          {/*logo*/}
          <Link href={'/'}>
          <Image 
            src={'/headertitle.png'} 
            width={180} 
            height={48} 
            alt='' 
            priority={true} 
          />
          </Link>
          {/* socials */}
          <Socials />  
        </div>
      </div> 
  </header>
  );
};

export default Header;
