import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi"; // For email icon
import { IoLocationOutline } from "react-icons/io5"; // For location icon
import { IoCall } from "react-icons/io5"; // For phone icon

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* First Section: Company Info and Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          <div className="w-full md:w-1/4">
            <Link href="/">
              <span className="text-3xl font-bold text-blue-500 hover:text-blue-400 cursor-pointer">FitXtreme</span>
            </Link>
            <p className="mt-2 text-gray-400 text-sm">Your fitness journey starts here. Join the FitXtreme community today!</p>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-12">
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <Link href="/about">
                <span className="text-gray-400 hover:text-gray-300 cursor-pointer">About Us</span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-400 hover:text-gray-300 cursor-pointer">Contact</span>
              </Link>
              <Link href="/terms">
                <span className="text-gray-400 hover:text-gray-300 cursor-pointer">Terms of Service</span>
              </Link>
              <Link href="/privacy">
                <span className="text-gray-400 hover:text-gray-300 cursor-pointer">Privacy Policy</span>
              </Link>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Services</h3>
              <Link href="/plans">
                <span className="text-gray-400 hover:text-gray-300 cursor-pointer">Plans</span>
              </Link>
              <Link href="/trainers">
                <span className="text-gray-400 hover:text-gray-300 cursor-pointer">Personal Trainers</span>
              </Link>
              <Link href="/testimonials">
                <span className="text-gray-400 hover:text-gray-300 cursor-pointer">Testimonials</span>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="flex items-center text-gray-400 space-x-2">
                <IoLocationOutline className="text-xl" />
                <p className="text-sm">Lucknow, India</p>
              </div>
              <div className="flex items-center text-gray-400 space-x-2">
                <IoCall className="text-xl" />
                <p className="text-sm">+91 7380663685</p>
              </div>
              <div className="flex items-center text-gray-400 space-x-2">
                <HiMail className="text-xl" />
                <p className="text-sm">puneetkushwaha9452@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-700"></div>

        {/* Second Section: Social Media and Newsletter */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Social Media Icons */}
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2">
              <h4 className="text-gray-400 text-sm">Follow us:</h4>
            </div>
            <div className="flex space-x-6">
              <Link href="https://github.com/puneetkushwaha" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl text-gray-400 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110" />
              </Link>
              <Link href="https://www.instagram.com/itzpuneett/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl text-gray-400 hover:text-pink-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110" />
              </Link>
              <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl text-gray-400 hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110" />
              </Link>
              <Link href="https://www.linkedin.com/in/puneettkushwaha/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-gray-400 hover:text-blue-700 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110" />
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-lg font-semibold text-center md:text-left">Stay Updated! Join Our Newsletter</h3>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} FitXtreme. All rights reserved.</p>
      </div>
    </footer>
  );
}
