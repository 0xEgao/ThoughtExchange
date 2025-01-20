export default function Home() {
    return (
      <div>
        <nav className="flex justify-center font-bold">
          <a href="/page" className="m-5 text-xl">Home</a>
          <a href="/page" className="m-5 text-xl">Trade</a>
            <a href="/page" className="m-5 text-xl">Contact</a>
        </nav>
        <header className="flex flex-col items-center justify-center m-7 p-7">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-700  text-2xl sm:text-4xl font-bold">THOUGHTEXCHANGE</h1>
          <h3 className=" text-sm sm:text-2xl" >Trade With Crypto Based Upon Your Opinions!</h3>
        </header>
     </div>
    );
  }