// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data (icons only)
export const navData = [
  { path: '/', icon: <HiHome /> },
  { path: '/about', icon: <HiUser /> },
  { path: '/services', icon: <HiRectangleGroup /> },
  { path: '/work', icon: <HiViewColumns /> },
  { path: '/testimonials', icon: <HiChatBubbleBottomCenterText /> },
  { path: '/contact', icon: <HiEnvelope /> },
];

// next
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav className="flex flex-col items-center xl:justify-center fixed bottom-0 xl:right-[0%] z-40 top-0 w-full xl:w-14 xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[70px] xl:h-max py-6 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              pathname === link.path ? 'text-accent' : ''
            } flex items-center hover:text-accent transition-all duration-300`}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
