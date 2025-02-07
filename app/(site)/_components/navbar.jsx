'use client'; // This marks the component as a client component

import { useState, useEffect } from "react";
import { ImFacebook } from "react-icons/im";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { IoMdMail, IoIosCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import Image from "next/image";

export function Navbar() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Track mobile menu state

  // Check if the user is logged in on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle input change for form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Show the sign-up form
  const handleSignUp = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  // Show the sign-in form
  const handleSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  // Close the forms and reset form data
  const closeForms = () => {
    setShowSignUp(false);
    setShowSignIn(false);
    setFormData({ name: '', email: '', password: '' });
  };

  // Handle form submission (sign up or sign in)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (showSignUp) {
      if (!formData.name || !formData.email || !formData.password) {
        alert("Please fill out all fields.");
        return;
      }

      // Simulate account creation
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      alert("Account created and logged in successfully!");
      closeForms();  // Close the modal
    } else if (showSignIn) {
      if (!formData.email || !formData.password) {
        alert("Please fill out all fields.");
        return;
      }

      // Simulate sign-in
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        setUser(storedUser);
        alert("Logged in successfully!");
        closeForms();  // Close the modal
      } else {
        alert("Invalid credentials.");
      }
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Simulate social login (for now)
  const handleSocialLogin = (platform) => {
    alert(`Signed up with ${platform}`);
    closeForms(); // Close the modal after successful "social" login
  };

  return (
    <>
      {/* Upper Navbar */}
      <div className="text-xs border-b shadow-sm sm:text-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between px-3 py-2 md:px-5 lg:px-0">
            <div className="flex items-center space-x-3 md:space-x-4">
              <a href="tel:+9951699516" className="flex items-center">
                <span className="p-1">
                  <IoIosCall />
                </span>
                <span className="hidden sm:block">9951699516</span>
              </a>
              <div className="hidden w-px h-4 bg-gray-400 sm:block"></div>
              <a
                href="mailto:info@hotelinnercircle.in"
                className="flex items-center"
              >
                <span className="p-1">
                  <BiLogoGmail />
                </span>
                <span className="hidden sm:block">
                  info@hotelinnercircle.in
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a
                href="https://www.facebook.com/hotelinnercirclehyderabad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImFacebook />
              </a>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2Finnercirclehyd1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/hotelinnercircle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:info@hotelinnercircle.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMdMail />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar with Logo, Links, and Button */}
      <div className="container px-3 py-4 mx-auto md:px-3 lg:px-0 md:py-1">
        <div className="flex flex-wrap items-center justify-between">
          <div className="items-center hidden space-x-3 text-xs font-medium uppercase md:flex lg:space-x-5 sm:text-sm md:text-base">
            <a href="/">Home</a>
            <a href="/rooms">Rooms</a>
            <a href="/ice-n-spice">Ice N'Spice</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
          </div>
          <a href="/" className="flex-shrink-0 my-2 md:my-0">
            <Image
              src="/logo.png"
              alt="logo"
              height={80}
              width={80}
              className="md:h-[70px] md:w-[100px]"
            />
          </a>
          <div className="flex items-center space-x-2 sm:space-x-3">
            {!user ? (
              <>
                <button
                  onClick={handleSignUp}
                  className="hidden lg:block border border-gray-300 rounded-lg px-4 md:px-5 py-1.5 md:py-2 text-sm"
                >
                  Sign Up
                </button>
                <button
                  onClick={handleSignIn}
                  className="hidden lg:block border border-gray-300 rounded-lg px-4 md:px-5 py-1.5 md:py-2 text-sm"
                >
                  Sign In
                </button>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="border border-red-500 text-red-500 rounded-lg px-4 md:px-5 py-1.5 md:py-2 text-sm"
              >
                Logout
              </button>
            )}
            <button className="border border-secondary bg-secondary text-white rounded-lg px-4 md:px-5 py-1.5 md:py-2 text-sm">
              Book Now
            </button>
            <button
              className="px-4 py-2 text-white border rounded-lg md:hidden border-secondary bg-secondary"
              onClick={toggleMenu} // Toggle the mobile menu
            >
              <CgMenuRight className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide-in from Left) */}
      <div
        className={`lg:hidden md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        
        <div className="flex flex-col w-64 h-full p-5 space-y-6 font-serif font-semibold bg-white">
        {/*LOGO SECTION*/}
          <div className="flex justify-between logo">
         
            <img src="http://localhost:3000/_next/image?url=%2Flogo.png&w=256&q=75" className="h-12"/>
            <button
            onClick={toggleMenu}
            className="self-end mb-3 text-xl text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae lab
          </div>
          <a href="/" className="text-lg border-b-2 border-black border-dashed">Home</a>
          <a href="/rooms" className="text-lg border-b-2 border-black border-dashed">Rooms</a>
          <a href="/ice-n-spice" className="text-lg border-b-2 border-black border-dashed">Ice N'Spice</a>
          <a href="/gallery" className="text-lg border-b-2 border-black border-dashed">Gallery</a>
          <a href="/contact" className="text-lg border-b-2 border-black border-dashed">Contact</a>
          <a href="/contact" className="text-lg border-b-2 border-black border-dashed">About Us</a>
          
        </div>
        
      </div>

      {/* SignUp / SignIn Modal */}
      {(showSignUp || showSignIn) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <button
              onClick={closeForms}
              className="absolute text-xl text-gray-500 top-3 right-3 hover:text-gray-700"
            >
              &times;
            </button>
            {showSignUp && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-center">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="block w-full p-3 mb-4 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="block w-full p-3 mb-4 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="block w-full p-3 mb-4 border border-gray-300 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 text-white rounded-lg bg-secondary"
                  >
                    Create Account
                  </button>
                </form>
                <div className="my-4 text-center">or</div>
                <button
                  onClick={() => handleSocialLogin('Google')}
                  className="flex items-center justify-center w-full py-3 mb-3 text-gray-700 border border-gray-300 rounded-lg"
                >
                  <BiLogoGmail className="mr-2" />
                  Sign Up with Google
                </button>
                <button
                  onClick={() => handleSocialLogin('Facebook')}
                  className="flex items-center justify-center w-full py-3 text-gray-700 border border-gray-300 rounded-lg"
                >
                  <ImFacebook className="mr-2" />
                  Sign Up with Facebook
                </button>
              </div>
            )}
            {showSignIn && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-center">Sign In</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="block w-full p-3 mb-4 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="block w-full p-3 mb-4 border border-gray-300 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 text-white rounded-lg bg-secondary"
                  >
                    Login
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
