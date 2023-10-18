import { useState } from 'react';

interface AccordionProps {
  children: React.ReactNode;
}

function Accordion({ children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && <div>{children}</div>}
      <button
        onClick={toggleAccordion}
        className='flex justify-center w-fit min-w-[124px] p-3 dark:bg-[#1a1919ad] bg-[#0001] rounded-lg dark:text-white text-black font-semibold sm:gap-2 gap-1 dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-[#000000da] transition-colors mt-4'
      >
        {isOpen ? 'See less' : 'See more'}
      </button>
    </div>
  );
}

export { Accordion };
