import { useRef } from 'react';
import type { Image, Technologies } from '../../utils/utils.ts';

interface Props {
  image: Image;
  title: string;
  github: string;
  url: string;
  technologies: Technologies[];
  description: string;
}
const ProjectImages = ({
  image,
  title,
  github,
  url,
  technologies,
  description,
}: Props) => {
  const dialogRef: React.MutableRefObject<HTMLDialogElement | null> =
    useRef(null);

  const handleClick = () => {
    if (dialogRef.current !== null) {
      dialogRef.current.showModal();
    }
  };

  const handleCloseModal = () => {
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
  };

  return (
    <div>
      <div className='flex flex-col items-center justify-center w-fit overflow-hidden cursor-pointer rounded-xl h-fit '>
        {image.cover ? (
          <img
            src={image?.cover}
            alt={title}
            onClick={handleClick}
            className='aspect-auto transition-transform duration-300 hover:scale-105 w-96 max-h-[285px] cursor-pointer'
          />
        ) : (
          <img
            src='../../../assets/default.svg'
            alt='default'
            onClick={handleClick}
            className='aspect-auto transition-transform duration-300 hover:scale-105 w-96 h-[285px] max-h-[285px] cursor-pointer'
          />
        )}
      </div>
      <dialog
        ref={dialogRef}
        className='dark:text-white dark:bg-[#4e4e4e] bg-[#F5F5F5] w-[90%] h-[100%] rounded-md'
      >
        <div className='flex flex-row gap-4 px-4 bg-[#F5F5F5] dark:bg-[#4e4e4e63]'>
          <div className='pt-2 w-11/12'>
            {image.cover ? (
              <img src={image.cover} alt={title} className='h-full w-[800px]' />
            ) : (
              <img
                src='../../../assets/default.svg'
                alt='default'
                className='h-[450px] w-[800px] mt-20'
              />
            )}
          </div>
          <div className='w-1/3 pb-2 mr-10 mt-7'>
            <h1 className='text-4xl font-extrabold'>{title}</h1>
            <div className='dark:hover:bg-[#FFFFFF11] dark:hover:text-[#F3F3F3] bg-transparent p-[5px] text-[#535353] hover:text-[#252525] hover:bg-[#cccccc38] h-10 absolute top-8 right-5 lg:p-2 rounded-md'>
              <button onClick={handleCloseModal}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon icon-tabler icon-tabler-x'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M18 6l-12 12'></path>
                  <path d='M6 6l12 12'></path>
                </svg>
              </button>
            </div>
            <div className='flex items-center gap-4 mt-10'>
              <a
                href={github}
                target='_blank'
                className='flex items-center justify-center p-3 pr-4 gap-1 sm:gap-2 font-semibold text-sm text-[#0a0a0a] dark:text-[#CCCCCC] bg-[#0e0e0e11] dark:bg-[#FFFFFF11] dark:hover:text-[#0a0a0a] dark:hover:bg-white hover:bg-[#111111] hover:text-white rounded-lg transition-colors'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-brand-github'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
                </svg>
                GitHub
              </a>
              <a
                href={url}
                target='_blank'
                className='flex items-center justify-center p-3 pr-4 font-semibold text-sm text-[#0a0a0a] dark:text-[#CCCCCC] bg-[#0e0e0e11] dark:bg-[#FFFFFF11] dark:hover:text-[#0a0a0a] dark:hover:bg-white hover:bg-[#111111] hover:text-white rounded-lg transition-colors'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-external-link w-10'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6'></path>
                  <path d='M11 13l9 -9'></path>
                  <path d='M15 4h5v5'></path>
                </svg>
                Visit website
              </a>
            </div>
            <br />
            <p className='text-[#252525] dark:text-[#CCCCCC] text-[0.91rem] w-80'>
              {description}
            </p>
            <p className='text-[#252525] dark:text-[#CCCCCC] text-[0.91rem] my-5'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              dolorum fugit temporibus deleniti, maiores corporis harum
              expedita. Perferendis fuga facilis quo id, eligendi est recusandae
              odio, esse ipsum ipsam obcaecati?
            </p>
            <div className=''>
              Tecnologies:
              {/* flex flex-row gap-3 mb-1 */}
              <ul className='flex flex-wrap mb-0 gap-x-4 gap-y-2 text-light-texto-secondary dark:text-dark-texto-secondary '>
                {technologies.map((technology) => (
                  <li className='flex items-center gap-2 text-sm dark:text-secondaryBText text-secondaryWText'>
                    <img src={technology.svg} className='h-6 w-6 ' alt='' />
                    {technology.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProjectImages;
