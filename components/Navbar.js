import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-blue-500 hover:text-blue-400 transition duration-300 ease-in-out">
          FitXtreme
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-3xl text-white cursor-pointer transition duration-300 ease-in-out" />
          ) : (
            <Menu className="text-3xl text-white cursor-pointer transition duration-300 ease-in-out" />
          )}
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {["Home", "Trainers", "Reviews", "Plans", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="text-lg font-medium relative group">
                  <span className="group-hover:text-blue-500 relative inline-block">{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu (Only Visible When isOpen is True) */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black text-white p-6 rounded-b-lg shadow-lg transition-all duration-300 ease-in-out">
          <ul className="space-y-6">
            {["Home", "Trainers", "Reviews", "Plans", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-lg font-medium relative group hover:text-blue-500 transition duration-300 ease-in-out"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
