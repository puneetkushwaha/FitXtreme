import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-3xl font-bold text-blue-500 hover:text-blue-400 transition duration-300 ease-in-out">
          FitXtreme
        </Link>

        {/* Menu Icon (Mobile) */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-3xl text-white cursor-pointer transition duration-300 ease-in-out" />
          ) : (
            <Menu className="text-3xl text-white cursor-pointer transition duration-300 ease-in-out" />
          )}
        </div>

        {/* Navbar Links */}
        <div className={`lg:flex items-center space-x-8 ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-lg font-medium text-white relative group hover:text-white-500 transition duration-300 ease-in-out"
              >
                <span className="group-hover:text-white-500 relative inline-block">
                  Home
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/trainers"
                className="text-lg font-medium text-white relative group hover:text-white-500 transition duration-300 ease-in-out"
              >
                Trainers
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className="text-lg font-medium text-white relative group hover:text-white-500 transition duration-300 ease-in-out"
              >
                Reviews
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/plans"
                className="text-lg font-medium text-white relative group hover:text-white-500 transition duration-300 ease-in-out"
              >
                Plans
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg font-medium text-white relative group hover:text-white-500 transition duration-300 ease-in-out"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-black text-white p-6 rounded-b-lg shadow-lg transition-all duration-300 ease-in-out`}
      >
        <ul className="space-y-6">
          <li>
            <Link
              href="/"
              className="text-lg font-medium text-white relative group hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/trainers"
              className="text-lg font-medium text-white relative group hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Trainers
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/reviews"
              className="text-lg font-medium text-white relative group hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/plans"
              className="text-lg font-medium text-white relative group hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Plans
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg font-medium text-white relative group hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
