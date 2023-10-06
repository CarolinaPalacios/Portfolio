import TypeWriter from 'typewriter-effect';

const Typewriter = () => {
  return (
    <div className='dark:text-blue-500 text-[#748c74]'>
      <TypeWriter
        options={{
          strings: ['creativity', 'innovation', 'technology'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Typewriter;
