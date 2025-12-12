import { Header } from "./_components/header";

export default function Conatct() {
  return (
    <>
      <Header />
      <main className="h-dvh"></main>
      <footer className=" h-[500px] bg-black relative text-white flex flex-col justify-between ">
        <div className=" absolute bottom-0 text-white text-[clamp(1vw,15vw,10vw)] opacity-20">
          XODUSWING
        </div>
        <div className=" ">
          <div>let connect</div>
          <div>links</div>
          <div> socials</div>
        </div>
      </footer>
    </>
  );
}
