import TypeWriter from 'typewriter-effect';
import { getLangFromUrl, useTranslations } from '../i18n/utils';
const url = new URL(window.location.href);
const lang = getLangFromUrl(url);

const t = useTranslations(lang);

const Typewriter = () => {
  return (
    <div className='dark:text-blue-500 text-[#748c74]'>
      <TypeWriter
        options={{
          strings: [t('Typewriter1'), t('Typewriter2'), t('Typewriter3')],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Typewriter;
