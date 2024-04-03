import { useRef } from 'react'
import { getLangFromUrl, useTranslations } from '../../i18n/utils.ts'
const lang = getLangFromUrl(new URL(window.location.href))
const t = useTranslations(lang)
import type { Contents, Image } from '../../utils/utils.ts'
import CertificateCarousel from '../Carousel/CertificateCarousel.tsx'

interface Props {
  title: string
  institution: string
  images: Image
  url?: string
  contents: Contents[]
}
const CertificateImages = ({
  title,
  institution,
  images,
  url,
  contents,
}: Props) => {
  const dialogRef: React.MutableRefObject<HTMLDialogElement | null> =
    useRef(null)

  const handleClick = () => {
    if (dialogRef.current !== null) {
      dialogRef.current.showModal()
    }
  }

  const handleCloseModal = () => {
    if (dialogRef.current !== null) {
      dialogRef.current.close()
    }
  }

  return (
    <div>
      <div className='flex flex-col items-center justify-center w-fit overflow-hidden cursor-pointer rounded-xl h-fit'>
        <img
          src={images.cover}
          alt={title}
          onClick={handleClick}
          className='aspect-auto transition-transform duration-300 hover:scale-105 w-96 max-h-[300px] cursor-pointer '
        />
      </div>
      <dialog
        ref={dialogRef}
        className='dark:text-white dark:bg-[#4e4e4e] bg-[#F5F5F5] w-[85%] desktop-xl:w-[55%] desktop-lg:w-[80%] desktop-lg:h-[50%] desktop-xl:h-[56%] mobile-sm:h-[80%] h-[75%] rounded-md tablet-md:h-[60%]'
      >
        <div
          className='flex flex-row mobile-xs:flex-col mobile-sm:flex-col mobile-md:flex-col
          tablet-md:flex-col
        px-4 bg-[#F5F5F5] dark:bg-[#4e4e4e63]'
        >
          <div
            className='desktop-lg:w-[520px] desktop-xl:w-[600px] mobile-xs:h-44 mobile-sm:w-full mobile-md:w-full
          tablet-md:w-full mobile-sm:h-60 mobile-sm:mt-12 mt-5'
          >
            <CertificateCarousel images={images} title={title} />
          </div>
          <div className='desktop-lg:w-1/2 mobile-sm:w-full desktop-xl:w-1/3 desktop-lg:ml-10 desktop-xl:ml-0 mt-10 pb-1 tablet-md:ml-12'>
            <h2 className='text-2xl font-extrabold mobile-xs:text-xl mobile-sm:text-xl'>
              {title}
            </h2>
            <p>{institution}</p>

            <div className='dark:hover:bg-[#FFFFFF11] dark:text-[#a8a8a8] dark:hover:text-[#F3F3F3] bg-transparent p-[5px] text-[#535353] hover:text-[#252525] hover:bg-[#cccccc38] h-10 absolute desktop-lg:top-6 top-8 right-5 lg:p-2 rounded-md mobile-xs:top-0 mobile-xs:right-1 mobile-md:top-5 mobile-md:right-3 mobile-sm:top-3 mobile-sm:right-2'>
              <button onClick={handleCloseModal}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-x'
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
            <div className='flex items-center mt-3'>
              <a
                href={url}
                target='_blank'
                className='flex items-center justify-center py-1 mobile-xs:p-2  font-semibold  text-[#0a0a0a] dark:text-[#e2e2e2] bg-[#0e0e0e11] dark:bg-[#FFFFFF11] dark:hover:text-[#0a0a0a] dark:hover:bg-white hover:bg-[#111111] hover:text-white rounded-lg transition-colors'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-external-link w-10 mobile-xs:h-5 mobile-xs:w-5'
                  width='20'
                  height='20'
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
              </a>
            </div>
            <div className='flex flex-col mt-4'>
              <div className='mobile-sm:w-full mobile-xs:w-full mobile-xs:text-sm'>
                <h2 className='text-xl font-bold'>{t('Content')}</h2>
                <ul className='list-disc mb-0 desktop-lg:gap-y-2 py-2 px-4 columns-2 tablet-md:columns-3 mobile-md:columns-3'>
                  {contents.map((content) => (
                    <li className='text-sm mobile-xs:text-xs'>
                      {lang === 'en' ? content.title.en : content.title.es}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default CertificateImages
