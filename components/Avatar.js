// next image
import Image from 'next/image';

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image 
    src={'/avatar v-2.png'} 
    width={737} 
    height={678} 
    alt='avatar' 
    className='translate-z-0 w-full h-full max-w-[667px] max-h-[608px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]' 
    />
  </div>;
};

export default Avatar;
