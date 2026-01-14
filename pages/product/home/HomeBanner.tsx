// "use client"

// import React, { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"

// import banner1 from "@/assets/banner/both.png"
// import banner2 from "@/assets/banner/cat-3.png"
// import banner3 from "@/assets/banner/both-2.png"
// import banner4 from "@/assets/banner/bird.png"

// const banners = [
//   {
//     id: 1,
//     image: banner1,
//     title: "New pet furniture just landed",
//     desc: "Comfortable & stylish furniture for your lovely pets.",
//     btn: "Shop Now",
//     btnLink: "/shop/furniture",
//     bg: "bg-[#FCE8E6]",
//     textColor: "text-[#0E373C]",
//     imageSize: "w-full h-auto",
//   },
//   {
//     id: 2,
//     image: banner2,
//     title: "Up to $100 OFF",
//     desc: "Premium cat products with special discount.",
//     btn: "Explore",
//     btnLink: "/shop/cat",
//     bg: "bg-[#F5FEFD]",
//     textColor: "text-[#494c4b]",
//     imageSize: "w-full h-auto",
//   },
//   {
//     id: 3,
//     image: banner3,
//     title: "Healthy food for happy pets",
//     desc: "Nutritious meals for cats & dogs, vet approved.",
//     btn: "Buy Food",
//     btnLink: "/shop/food",
//     bg: "bg-[#E6F4EA]",
//     textColor: "text-[#1E4620]",
//     imageSize: "w-full h-auto",
//   },
//   // {
//   //   id: 4,
//   //   image: banner4,
//   //   title: "Everything your dog needs",
//   //   desc: "Toys, treats & accessories for your best friend.",
//   //   btn: "Shop Dog",
//   //   btnLink: "/shop/dog",
//   //   bg: "bg-[#FFF4E5]",
//   //   textColor: "text-[#5A2D0C]",
//   //   imageSize: "w-full h-auto",
//   // },
//   {
//   id: 4,
//   image: banner4,
//   title: "Colorful care for your feathered friend",
//   desc: "Premium food, toys & accessories for happy, healthy birds.",
//   btn: "Shop Birds",
//   btnLink: "/shop/birds",
//   bg: "bg-[#E8F6FB]",
//   textColor: "text-[#0B3C49]",
//   imageSize: "w-full h-auto",
// },
// ]

// // const HomeBanner = () => {
// //   const [active, setActive] = useState(0)
// //   const current = banners[active]

// //   const nextSlide = () => {
// //     setActive((prev) => (prev + 1) % banners.length)
// //   }

// //   const prevSlide = () => {
// //     setActive((prev) => (prev - 1 + banners.length) % banners.length)
// //   }

// //   return (
// //     <section
// //       className={`relative w-full overflow-hidden rounded-lg transition-colors duration-500 ${current.bg}`}
// //     >
// //       {/* ================= MOBILE ================= */}
// //       <div className="md:hidden relative">
// //         <Image
// //           src={current.image}
// //           alt="banner"
// //           className={current.imageSize}
// //           priority
// //         />

// //         {/* TEXT */}
// //         <div className="p-5 space-y-2">
// //           <h2 className={`text-xl font-semibold ${current.textColor}`}>
// //             {current.title}
// //           </h2>
// //           <p className={`text-sm ${current.textColor}`}>{current.desc}</p>

// //           <Link
// //             href={current.btnLink}
// //             className="inline-block bg-shop_dark_green px-6 py-2 text-white rounded-md text-sm font-semibold hover:opacity-90 transition"
// //           >
// //             {current.btn}
// //           </Link>
// //         </div>

// //         {/* DOTS */}
// //         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
// //           {banners.map((_, i) => (
// //             <button
// //               key={i}
// //               onClick={() => setActive(i)}
// //               className={`h-2 w-2 rounded-full ${
// //                 active === i ? "bg-shop_dark_green" : "bg-gray-300"
// //               }`}
// //             />
// //           ))}
// //         </div>

// //         {/* Mobile slide arrows (no icon) */}
// //         <button
// //           onClick={prevSlide}
// //           className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8"
// //         />
// //         <button
// //           onClick={nextSlide}
// //           className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8"
// //         />
// //       </div>

// //       {/* ================= DESKTOP / MD ================= */}
// //       <div className="hidden md:flex items-center justify-between px-10 lg:px-24 py-16 relative">
// //         {/* LEFT CONTENT */}
// //         <div className="space-y-4 max-w-lg">
// //           <h2
// //             className={`text-3xl lg:text-4xl font-semibold leading-tight ${current.textColor}`}
// //           >
// //             {current.title}
// //           </h2>

// //           <p className={`text-base ${current.textColor}`}>{current.desc}</p>

// //           <Link
// //             href={current.btnLink}
// //             className="inline-block bg-shop_dark_green px-6 py-3 text-white rounded-md text-sm font-semibold hover:opacity-90 transition"
// //           >
// //             {current.btn}
// //           </Link>
// //         </div>

// //         {/* RIGHT IMAGE */}
// //         <div>
// //           <Image src={current.image} alt="banner" className="w-[360px] lg:w-[420px]" />
// //         </div>

// //         {/* ARROWS */}
// //         <button
// //           onClick={prevSlide}
// //           className="absolute left-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow flex items-center justify-center text-lg font-bold"
// //         >
// //           ‹
// //         </button>

// //         <button
// //           onClick={nextSlide}
// //           className="absolute right-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow flex items-center justify-center text-lg font-bold"
// //         >
// //           ›
// //         </button>
// //       </div>
// //     </section>
// //   )
// // }

// // export default HomeBanner

// const HomeBanner = () => {
//   const [active, setActive] = useState(0)
//   const current = banners[active]

//   const nextSlide = () => {
//     setActive((prev) => (prev + 1) % banners.length)
//   }

//   const prevSlide = () => {
//     setActive((prev) => (prev - 1 + banners.length) % banners.length)
//   }

//   return (
//     <section
//       className={`relative w-full overflow-hidden rounded-lg transition-colors duration-500
//       h-[360px] sm:h-[420px] md:h-[460px] lg:h-[520px] ${current.bg}`}
//     >
//       {/* ================= MOBILE ================= */}
//       <div className="md:hidden h-full flex flex-col">
//         {/* IMAGE */}
//         <div className="relative w-full h-[200px]">
//           <Image
//             src={current.image}
//             alt={current.title}
//             fill
//             priority
//             className="object-contain"
//           />
//         </div>

//         {/* TEXT */}
//         <div className="flex-1 p-5 space-y-3">
//           <h2 className={`text-xl font-semibold ${current.textColor}`}>
//             {current.title}
//           </h2>
//           <p className={`text-sm ${current.textColor}`}>
//             {current.desc}
//           </p>

//           <Link
//             href={current.btnLink}
//             className="inline-block bg-shop_dark_green px-6 py-2 text-white rounded-md text-sm font-semibold hover:opacity-90 transition"
//           >
//             {current.btn}
//           </Link>
//         </div>

//         {/* DOTS */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//           {banners.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActive(i)}
//               className={`h-2 w-2 rounded-full ${
//                 active === i ? "bg-shop_dark_green" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>

//         {/* TOUCH ARROWS */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8"
//         />
//         <button
//           onClick={nextSlide}
//           className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8"
//         />
//       </div>

//       {/* ================= DESKTOP / TABLET ================= */}
//       <div className="hidden md:flex items-center justify-between h-full px-10 lg:px-24 relative">
//         {/* LEFT CONTENT */}
//         <div className="space-y-4 max-w-lg">
//           <h2
//             className={`text-3xl lg:text-4xl font-semibold leading-tight ${current.textColor}`}
//           >
//             {current.title}
//           </h2>

//           <p className={`text-base ${current.textColor}`}>
//             {current.desc}
//           </p>

//           <Link
//             href={current.btnLink}
//             className="inline-block bg-shop_dark_green px-6 py-3 text-white rounded-md text-sm font-semibold hover:opacity-90 transition"
//           >
//             {current.btn}
//           </Link>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px]">
//           <Image
//             src={current.image}
//             alt={current.title}
//             fill
//             className="object-contain"
//           />
//         </div>

//         {/* ARROWS */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow flex items-center justify-center text-lg font-bold"
//         >
//           ‹
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow flex items-center justify-center text-lg font-bold"
//         >
//           ›
//         </button>
//       </div>
//     </section>
//   )
// }

// export default HomeBanner

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import banner1 from "@/assets/banner/both.png";
import banner2 from "@/assets/banner/cat-3.png";
import banner3 from "@/assets/banner/both-2.png";
import banner4 from "@/assets/banner/bird.png";

const banners = [
  {
    id: 1,
    image: banner1,
    title: "New pet furniture just landed",
    desc: "Comfortable & stylish furniture for your lovely pets.",
    btn: "Shop Now",
    btnLink: "/shop/furniture",
    bg: "bg-[#FCE8E6]",
    textColor: "text-[#0E373C]",
  },
  {
    id: 2,
    image: banner2,
    title: "Up to $100 OFF",
    desc: "Premium cat products with special discount.",
    btn: "Explore",
    btnLink: "/shop/cat",
    bg: "bg-[#F5FEFD]",
    textColor: "text-[#494c4b]",
  },
  {
    id: 3,
    image: banner3,
    title: "Healthy food for happy pets",
    desc: "Nutritious meals for cats & dogs, vet approved.",
    btn: "Buy Food",
    btnLink: "/shop/food",
    bg: "bg-[#E6F4EA]",
    textColor: "text-[#1E4620]",
  },
  {
    id: 4,
    image: banner4,
    title: "Colorful care for your feathered friend",
    desc: "Premium food, toys & accessories for happy, healthy birds.",
    btn: "Shop Birds",
    btnLink: "/shop/birds",
    bg: "bg-[#E8F6FB]",
    textColor: "text-[#0B3C49]",
  },
];

export default function HomeBanner() {
  const [active, setActive] = useState(0);
  const current = banners[active];

  const next = () => setActive((prev) => (prev + 1) % banners.length);

  const prev = () =>
    setActive((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <section
      className={`relative w-full overflow-hidden rounded-lg transition-colors duration-500
      h-420px sm:h-460px md:h-460px lg:h-520px ${current.bg}`}
    >
      {/* ================= MOBILE ================= */}
      <div className="md:hidden h-full flex flex-col items-center justify-between text-center px-5 pt-6">
        {/* IMAGE (bigger on mobile) */}
        <div className="relative w-full h-[240px]">
          <Image
            src={current.image}
            alt={current.title}
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* TEXT (centered) */}
        <div className="space-y-3">
          <h2 className={`text-xl font-semibold ${current.textColor}`}>
            {current.title}
          </h2>

          <p className={`text-sm leading-relaxed ${current.textColor}`}>
            {current.desc}
          </p>

          <Link
            href={current.btnLink}
            className="inline-block mt-2 bg-shop_dark_green px-7 py-2.5 text-white rounded-md text-sm font-semibold hover:opacity-90 transition"
          >
            {current.btn}
          </Link>
        </div>

        {/* DOTS */}
        <div className="flex gap-2 pb-4">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 w-2 rounded-full ${
                active === i ? "bg-shop_dark_green" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= DESKTOP / TABLET ================= */}
      <div className="container mx-auto hidden md:flex items-center justify-between h-full px-4 relative">
        {/* LEFT */}
        <div className="space-y-4 max-w-lg">
          <h2
            className={`text-3xl lg:text-4xl font-semibold leading-tight ${current.textColor}`}
          >
            {current.title}
          </h2>

          <p className={`text-base leading-relaxed ${current.textColor}`}>
            {current.desc}
          </p>

          {/* <Link
            href={current.btnLink}
            className="inline-block bg-shop_dark_green px-6 py-3 text-gray-700 rounded-md text-sm font-semibold hover:opacity-90 transition"
          >
            {current.btn}
          </Link> */}
          <Link
            href={current.btnLink}
            className="
    inline-flex
    items-center
    justify-center
    bg-shop_dark_green
    text-white
    px-7
    py-3
    rounded-full
    text-sm
    font-semibold
    cursor-pointer
   bg-[#1F6F5B] 
    shadow-sm
    ring-1
    ring-shop_dark_green/30

    transition-all
    duration-300
    ease-out

    hover:bg-[#163a2f]
    hover:shadow-lg
    hover:ring-shop_dark_green/60
    hover:-translate-y-[1px]

    active:translate-y-0
    active:shadow-md
  "
          >
            {current.btn}
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px]">
          <Image
            src={current.image}
            alt={current.title}
            fill
            className="object-contain"
          />
        </div>

        {/* ARROWS */}
        <button
          onClick={prev}
          className="absolute cursor-pointer left-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white hover:bg-amber-400 hover:text-white shadow flex items-center justify-center text-lg font-bold"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-amber-400 hover:text-white h-10 w-10 rounded-full bg-white shadow flex items-center justify-center text-lg font-bold"
        >
          ›
        </button>
      </div>
    </section>
  );
}
