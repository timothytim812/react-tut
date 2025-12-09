import Image from "next/image";

const title = "Stay  Hydrated  in Style";

function Hero() {
  return (
    <section className=" h-screen  relative flex justify-center items-center">
      <Image src="/bg.jpg" alt="hero" fill   className=" object-cover" />
      <div className=" absolute top-1/2 left-1/2 space-y-6">
        <h1 className=" text-4xl font-semibold flex flex-col gap-4">
          {title.split("  ").map((ctx) => {
            return <span key={ctx}>{ctx}</span>;
          })}
        </h1>
        <p className=" text-gray-500 bg-gray-400 rounded-2xl text-xl px-6 py-4 flex flex-col">
          <span>Lorem ipsum dolor sit amet consectetur</span>
          <span>adipisicing elit. Quisquam, quos.</span>
        </p>
        <button className=" bg-blue-400 w-full py-4 rounded-2xl">
          Get Started
        </button>
      </div>
    </section>
  );
}

export { Hero };
