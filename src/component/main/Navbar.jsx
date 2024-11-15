
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import logo from "../../assets/newLogoa.png";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolledDown, setIsScrolledDown] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Handle scroll event to show the navbar background only when scrolling down
//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
//     if (currentScrollY > lastScrollY && currentScrollY > 50) {
//       setIsScrolledDown(true);
//     } else if (currentScrollY < lastScrollY || currentScrollY === 0) {
//       setIsScrolledDown(false);
//     }
//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 ${
//           isScrolledDown ? "bg-transparent shadow-pink-800" : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 md:px-5  flex justify-between items-center p-5">
//           {/* Logo */}
//           <div>
//             <img
//               src={logo}
//               alt="Logo"
//               className="w-28 md:w-40 lg:w-48 transition-all duration-300"
//             />
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-800 focus:outline-none"
//             >
//               {isOpen ? (
//                 <AiOutlineClose className="h-6 w-6" />
//               ) : (
//                 <AiOutlineMenu className="h-6 w-6" />
//               )}
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex gap-10 text-sm lg:text-base  font-mono transition-all duration-300">
//             <Link to="/" className="hover:text-pink-600 transition duration-300">
//               HOME
//             </Link>
//             <Link
//               to="/about"
//               className="hover:text-pink-600 transition duration-300"
//             >
//               ABOUT
//             </Link>
//             <Link
//               to="/service"
//               className="hover:text-pink-600 transition duration-300"
//             >
//               SERVICE
//             </Link>
//             <Link
//               to="/portfolio"
//               className="hover:text-pink-600 transition duration-300"
//             >
//               PORTFOLIO
//             </Link>
//             <Link
//               to="/contact"
//               className="hover:text-pink-600 transition duration-300"
//             >
//               CONTACT
//             </Link>
//           </div>

//           {/* Mobile Menu */}
//           {isOpen && (
//             <div className="md:hidden absolute top-16 left-0 right-0 bg-colorA text-white shadow-lg mt-5 p-5 z-50">
//               <ul className="flex flex-col text-left items-center space-y-4 text-base font-medium">
//                 <li>
//                   <Link
//                     to="/"
//                     className="text-gray-800 hover:text-pink-600 transition duration-300"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     HOME
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/about"
//                     className="text-gray-800 hover:text-pink-600 transition duration-300"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     ABOUT
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/service"
//                     className="text-gray-800 hover:text-pink-600 transition duration-300"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     SERVICE
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/portfolio"
//                     className="text-gray-800 hover:text-pink-600 transition duration-300"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     PORTFOLIO
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/contact"
//                     className="text-gray-800 hover:text-pink-600 transition duration-300"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     CONTACT
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </nav>

//     </>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/newLogoa.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event to change navbar background
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50) {
      setIsScrolledDown(true);
    } else {
      setIsScrolledDown(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 p-5 transition-all duration-300 ${
          isScrolledDown
            ? "bg-white shadow-lg" // Show background when scrolled
            : "bg-transparent" // Transparent background initially
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-5 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="w-28 md:w-40 lg:w-48 transition-all duration-300"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <AiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm lg:text-base font-mono">
            <Link to="/" className="hover:text-pink-600 transition duration-300">
              HOME
            </Link>
            <Link
              to="/about"
              className="hover:text-pink-600 transition duration-300"
            >
              ABOUT
            </Link>
            <Link
              to="/service"
              className="hover:text-pink-600 transition duration-300"
            >
              SERVICE
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-pink-600 transition duration-300"
            >
              PORTFOLIO
            </Link>
            <Link
              to="/contact"
              className="hover:text-pink-600 transition duration-300"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white text-gray-800 shadow-lg mt-5 p-5 z-50">
              <ul className="flex flex-col text-left items-center space-y-4 text-base font-medium">
                <li>
                  <Link
                    to="/"
                    className="hover:text-pink-600 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-pink-600 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    className="hover:text-pink-600 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    SERVICE
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="hover:text-pink-600 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-pink-600 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
