import TypeWriter from "typewriter-effect";

const Typewriter = () => {
  return (
    <div className="text-blue-500">

      <TypeWriter
        options={{
          strings: [
            "creativity",
            "innovation",
            "technology",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default Typewriter