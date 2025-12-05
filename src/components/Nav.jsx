import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const Nav = () => {
  
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div
        className="flex items-center justify-between p-10 lg:flex-row
           "
      >
       <div>
          <a
            href="#"
            className="text-transparent [-webkit-text-stroke:0.5px_#B8860B] font-mono font-black text-5xl
          tracking-wider flex items-center"
          >
            <CgNametag className="text-[#B8860B]" />
            JBOSS
          </a>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden md:block space-x-2">
            <a
              href="#"
              className="text-white font-bold uppercase hover:bg-[#FFD700] hover:text-[#5D3954] rounded-full px-5 py-2 text-xl"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white font-bold uppercase hover:bg-[#FFD700] hover:text-[#5D3954] rounded-full px-5 py-2 text-xl"
            >
              About
            </a>
            <a
              href="#"
              className="text-white font-bold uppercase hover:bg-[#FFD700] hover:text-[#5D3954] rounded-full px-5 py-2 text-xl"
            >
              Project
            </a>
          </div>
          <div className="ssm:block md:hidden space-x-2">
            {toggle ? (
              <AiOutlineClose
                onClick={closeMenu}
                size={30}
                className="text-white cursor-pointer  "
              />
            ) : (
              <HiMenuAlt1
                onClick={openMenu}
                size={30}
                className="text-white cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      <div>
        {toggle ? (
          <div className="flex justify-between ml-10 ">
            <ul>
              <li className="text-white text-xl mb-2 cursor-pointer">Home</li>
              <li className="text-white text-xl mb-2 cursor-pointer">About</li>
              <li className="text-white text-xl mb-2 cursor-pointer">
                Service
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Nav;