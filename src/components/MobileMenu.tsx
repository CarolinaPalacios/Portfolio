import { useState } from 'react';
import {
  HomeIcon,
  AboutIcon,
  ProjectsIcon,
  ExperienceIcon,
  ContactIcon,
} from './Icons/MenuIcons';

import { getLangFromUrl, useTranslations } from '../i18n/utils';
const url = new URL(window.location.href);
const lang = getLangFromUrl(url);
const t = useTranslations(lang);

const MobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', url: '/', icon: <HomeIcon /> },
    { title: 'About', url: '/#about', icon: <AboutIcon /> },
    { title: 'Projects', url: '/#projects', icon: <ProjectsIcon /> },
    { title: 'Experience', url: '/#experience', icon: <ExperienceIcon /> },
    { title: 'Contact', url: '/#contact', icon: <ContactIcon /> },
  ];

  return (
    <div className='lg:hidden'>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className='text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white relative -left-5'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      {mobileMenuOpen && (
        <div className='lg:hidden absolute top-0 left-0 w-full h-screen bg-white dark:bg-[#252525] flex flex-col items-center justify-center duration-500 transition-all text-xl font-medium mobile-xs:text-lg'>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className='absolute top-5 left-5 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <div className='flex justify-start mb-12'>
            <a href='/en'>
              <img
                src='https://freesvg.org/img/united_kingdom.png'
                alt=''
                className='w-[27px] h-[27px] relative top-1'
              />
            </a>
            <span className='mx-5'>|</span>
            <a href='/es'>
              <img
                src='https://icons.veryicon.com/png/Flag/Rounded%20World%20Flags/Spain%20Flag.png'
                alt=''
                className='w-[30px] h-[30px] relative top-0.5'
              />
            </a>
          </div>
          <nav className='flex flex-col items-center space-y-4'>
            <ul className='flex flex-col items-start justify-center gap-20'>
              {menuItems.map(({ title, url, icon }) => (
                <li className='dark:text-gray-400 dark:hover:text-white hover:text-black text-gray-700 w-fit'>
                  <a
                    href={url}
                    className='flex items-center justify-start gap-5'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {icon}{' '}
                    {t(
                      title as
                        | 'Home'
                        | 'About'
                        | 'Projects'
                        | 'Experience'
                        | 'Contact'
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
