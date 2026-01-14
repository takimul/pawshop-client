
"use client";

import React, { useEffect , useState } from "react";
import { useColorClasses } from "@/lib/styles";
import { X } from "lucide-react";
import { RiTruckFill } from "react-icons/ri";
import { IoChevronDownSharp } from "react-icons/io5";
import Container from "@/components/Container/Container";
import SelectLanguage from "./SelectLanguage";
import TopSocialLinks from "./TopSocialLinks";

export default function TopBar() {
  const { bgTopBar, textMain,bgMain, textPrice, textSecondary } = useColorClasses();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* TOP BAR */}
      <div className={`py-1 px-4 w-full ${bgTopBar} ${textMain}`}>
        <Container>
          <div className=" grid grid-cols-1 md:grid-cols-2">
          <button
            onClick={() => setOpen(true)}
            className={`w-full md:w-auto text-sm flex items-center justify-center md:justify-normal  text-left hover:underline underline-offset-2 font-semibold ${textPrice} hover:cursor-pointer`}
          >
            <RiTruckFill className="mr-1 text-2xl" />
            Free delivery on first-time orders over 5000 tk
          </button>

          <div className="hidden md:inline-flex items-center justify-end">
            <div className="flex items-center gap-x-1 border-r-[1px] border-r-black/30 px-4">
              <SelectLanguage />
              <IoChevronDownSharp  className="mt-1"/>
            </div>
            <TopSocialLinks />
          </div>
        </div>
        </Container>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className={`relative w-full max-w-3xl rounded-lg shadow-xl mx-4 ${bgMain}`}>
            
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <p className={`text-sm ${textSecondary}`}>
                Free 1–3 day delivery over 5000 tk
              </p>
              <button onClick={() => setOpen(false)}>
                <X className={`w-5 h-5 ${textSecondary} cursor-pointer`} />
              </button>
            </div>

            {/* BODY */}
            <div className={`px-8 py-10 text-center `}>
          
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-blue-50`}>
                  <svg
                    width="36"
                    height="36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-blue-600"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 7h13v10H3z" />
                    <path d="M16 10h4l1 3v4h-5z" />
                    <circle cx="7.5" cy="17.5" r="1.5" />
                    <circle cx="17.5" cy="17.5" r="1.5" />
                  </svg>
                </div>
              </div>

              {/* TITLE */}
              <h2 className="text-3xl font-semibold text-orange-500">
                Fast, Free Delivery
              </h2>
              <p className={`${textSecondary} mt-2`}>
                On first-time orders over 5000 tk
              </p>

              {/* TABLE */}
              <div className="mt-10 max-w-md mx-auto text-left">
                <div className={`grid grid-cols-2 font-semibold  border-b pb-2 ${textSecondary}`}>
                  <span>SUBTOTAL</span>
                  <span>SHIPPING</span>
                </div>

                <div className={`grid grid-cols-2 py-4 border-b ${textSecondary}`}>
                  <span>Over 5000 tk</span>
                  <span className="font-medium">Free</span>
                </div>

                <div className={`grid grid-cols-2 py-4 ${textSecondary}`}>
                  <span>Under 5000 tk</span>
                  <span className="font-medium">৳120 Flat Rate</span>
                </div>
              </div>

             
              <p className={`mt-8 text-xs leading-relaxed ${textSecondary}`}>
                Automatically applied at checkout. <br />
                Delivery available only within Bangladesh.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

