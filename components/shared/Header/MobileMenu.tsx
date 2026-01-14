// import React from 'react'
// import { RiMenuFill } from 'react-icons/ri'

// const MobileMenu = () => {

//   return (
//     <div className={`text-3xl md:hidden text-gray-500 hover:text-green-700 effect cursor-pointer duration-200`}>
//         <RiMenuFill/>
//     </div>
//   )
// }

// export default MobileMenu

"use client";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { navigation } from "@/constants/navigation";
import Link from "next/link";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div
        onClick={toggleMenu}
       className="text-3xl md:hidden text-white/70 cursor-pointer p-2 rounded-full transition-all duration-300 ease-out bg-transparent hover:text-[#237803] hover:bg-[#237803]/15 hover:shadow-[0_8px_22px_rgba(35,120,3,0.35)] hover:scale-110 active:scale-100"

      >
        <RiMenu3Fill />
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 md:hidden text-white/80"
        onClose={toggleMenu}
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <DialogPanel
            transition
            className="w-[90%] space-y-4 p-6 border border-[#237803] rounded-md absolute top-10 m-5 bg-black"
          >
            <div className="flex items-center justify-between gap-5">
              <h3 className="font-semibold text-xl">Navigation Menu</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 text-2xl hover:text-red-600 duration-300 border border-white/20 rounded-sm hover:border-white/50"
              >
                <MdClose />
              </button>
            </div>
            <div>
              {/* menu items */}
              <nav className="flex flex-col pt-5 gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="relative group flex items-center gap-3 text-gray-700 hover:text-[#2E7D32] transition-colors duration-300"
                  >
                    {/* dot */}
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-gray-400 
                     transition-all duration-300
                    group-hover:border-[#2E7D32] 
                     group-hover:bg-[#2E7D32]"
                    />

                    {item.name}

                    {/* underline */}
                    <span
                      className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2E7D32]
                        transition-all duration-300
                        group-hover:w-full"
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileMenu;
