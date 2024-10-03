import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
   <header className="flex justify-around space-x-9 p-5 bg-sky-700 z-50">
        <h2 className="text-4xl font-semibold text-white"> Radiant Mind </h2>

        <div>
            <nav className="">
            <ul className="flex gap-x-9 p-3 text-white z-50">
            <li><a href="/" className="hover:text-yellow-200">Home</a></li>
            <li><a href="/" className="hover:text-yellow-200">About</a></li>
            <li><a href="/" className="hover:text-yellow-200">Contact</a></li>
            </ul>
            </nav>
            </div>
           
        </header>
  
   
  );
}

export default Header;