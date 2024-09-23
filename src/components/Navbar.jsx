import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className='sticky top-0 p-4 bg-white shadow-md w-full z-50 px-10'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        
        <div className='flex items-center justify-between min-[500px]:w-fit w-full'>
          <a href="/" className="sm:max-w-full text-2xl font-bold text-[#1A5319]">
            Priyambada Subudhi
          </a>
          <div className='block min-[500px]:hidden'>
            {isOpen ? <AiOutlineClose onClick={toggleNav} /> : <FaBars onClick={toggleNav} />}
          </div>
        </div>

        <ul className='hidden min-[500px]:flex md:flex-row gap-x-5 md:space-x-8 mt-4 md:mt-0'>
          {['about', 'education', 'experience', 'publications', 'awards'].map((section) => (
            <li key={section} className="relative group">
              <a
                href={`#${section}`}
                className="text-gray-700 hover:text-[#1A5319] relative inline-block font-medium text-lg"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-[#1A5319] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {isOpen && (
          <ul className='md:hidden flex flex-col mt-4'>
            {['about', 'education', 'experience', 'publications', 'awards'].map((section) => (
              <li key={section} className="relative group" onClick={toggleNav}>
                <a
                  href={`#${section}`}
                  className="text-gray-700 hover:text-[#1A5319] relative inline-block font-medium text-lg"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-[#1A5319] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
