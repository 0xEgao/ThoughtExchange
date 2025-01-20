import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-center font-bold border-b border-gray-300 mx-24">
        <a href="/" className="m-5 text-xl">Home</a>
        <a href="/page" className="m-5 text-xl">Trade</a>
        <a href="/page" className="m-5 text-xl">Contact</a>
      </nav>
      <header className="flex flex-col items-center justify-center m-4 p-7">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-4xl font-bold uppercase tracking-wider">THOUGHT EXCHANGE</div>
      <h3 className=" text-sm sm:text-2xl" >Trade With Crypto Based Upon Your Opinions!</h3>
      </header>
   </div>
  );
}