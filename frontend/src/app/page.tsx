import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-evenly border-b border-gray-300 mx-24">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-500   text-2xl font-bold  tracking-wider m-2 py-2">ThoughtEX</div>
        <nav className="flex justify-center font-bold py-2">
        <a href="/" className="m-2 text-xl px-2 ">Home</a>
        <a href="/page" className="m-2 text-xl px-2">Trade</a>
          <a href="/page" className="m-2 text-xl px-2">Contact</a>
        </nav>
        <nav className="flex items-center justify-between">
          <h5 className="text-sm w-32 break-words">For 18 years and above only</h5>
          <button className="m-2 bg-gradient-to-r from-blue-600 to-purple-700 p-3 rounded-xl text-white">Get Started</button>
        </nav>
      </nav>
      <header className="flex flex-col items-center justify-center m-4 p-7">
      </header>
   </div>
  );
}