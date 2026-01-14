// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import ThemeToggle from "../ThemeToggle";
// import { useColorClasses } from "@/lib/styles";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const { bgTopBar, textMain,bgMain, textPrice, textSecondary } = useColorClasses();

//   return (
//     <header className="sticky top-0 z-50 bg-white dark:bg-gray-400 border-b">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="text-xl font-bold text-primary">
//             PetWell<span className="text-black">BD</span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-6">
//             <Link href="/" className="nav-link">Home</Link>
//             <Link href="/products" className="nav-link">Products</Link>
//             <Link href="/vet" className="nav-link">Vet Care</Link>
//             <Link href="/about" className="nav-link">About</Link>
//           </nav>

//           {/* Actions */}
//           <div className="hidden md:flex items-center gap-4">
//             <Link href="/cart" className="relative">
//               🛒
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
//                 2
//               </span>
//             </Link>
//             <ThemeToggle />
//             <Link
//               href="/checkout"
//               className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90"
//             >
//               Checkout
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-2xl"
//           >
//             ☰
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {open && (
//           <div className="md:hidden py-4 space-y-3">
//             <Link onClick={() => setOpen(false)} href="/" className="block nav-link">
//               Home
//             </Link>
//             <Link onClick={() => setOpen(false)} href="/products" className="block nav-link">
//               Products
//             </Link>
//             <Link onClick={() => setOpen(false)} href="/vet" className="block nav-link">
//               Vet Care
//             </Link>
//             <Link onClick={() => setOpen(false)} href="/about" className="block nav-link">
//               About
//             </Link>
//             <Link
//               onClick={() => setOpen(false)}
//               href="/checkout"
//               className="block text-center mt-3 bg-primary text-white py-2 rounded-lg"
//             >
//               Checkout
//             </Link>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }



"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { useColorClasses } from "@/lib/styles";
import ThemeToggle from "../ThemeToggle";

/* ================= DATA ================= */
const categories = [
  {
    name: "Dog",
    items: ["Dry Food", "Wet Food", "Treats", "Toys", "Beds"],
  },
  {
    name: "Cat",
    items: ["Dry Food", "Wet Food", "Litter", "Trees", "Toys"],
  },
  {
    name: "Small Pet",
    items: ["Rabbit", "Hamster", "Cages", "Bedding"],
  },
  {
    name: "Bird",
    items: ["Food", "Cages", "Accessories"],
  },
];

/* ================= COMPONENT ================= */
export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuStack, setMenuStack] = useState<any[]>([]);
   const { bgTopBar, textMain,bgMain, textPrice, textSecondary } = useColorClasses();

  /* 🔒 Lock background scroll */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const openCategory = (cat: any) => {
    setMenuStack((prev) => [...prev, cat]);
  };

  const goBack = () => {
    setMenuStack((prev) => prev.slice(0, -1));
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setMenuStack([]);
  };

  const currentMenu = menuStack[menuStack.length - 1];

  return (
    <header className="sticky top-0 z-50 w-full bg-green-700 text-white">
      {/* ================= TOP BAR ================= */}
      <div className="px-4 py-3">
        <div className="container mx-auto px-4 flex items-center gap-3">
  {/* Hamburger (Mobile / Tablet) */}
  <button
    onClick={() => setDrawerOpen(true)}
    className="lg:hidden"
  >
    <Menu className="w-6 h-6" />
  </button>

  {/* Logo */}
  <Link href="/" className="text-xl font-bold tracking-wide">
    Pawshop
  </Link>

  {/* Right side actions */}
  <div className="ml-auto flex items-center gap-4">
    {/* Cart */}
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] rounded-full px-1.5">
        2
      </span>
    </Link>

    {/* Theme Toggle */}
    <ThemeToggle />
  </div>
</div>

      </div>

      {/* ================= SEARCH BAR (ALL DEVICES) ================= */}
      <div className="px-4 pb-4">
        <div className="container px-4 mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search the store"
              className="w-full rounded-full px-5 py-3 pr-12 text-sm text-black bg-white focus:outline-none"
            />
            <Search className="absolute right-4 top-3.5 w-4 h-4 text-green-700" />
          </div>
        </div>
      </div>

      {/* ================= DESKTOP CATEGORY BAR ================= */}
      <div className="hidden lg:block bg-[#FAF8F5] text-black/60 ">
        <nav className="container border-b  px-4 mx-auto flex gap-10">
          {categories.map((cat) => (
            <div key={cat.name} className="relative group py-3">
              <span className="cursor-pointer font-medium hover:text-green-700">
                {cat.name}
              </span>

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-xl rounded-xl p-4">
                {cat.items.map((item) => (
                  <Link
                    key={item}
                    href="/products"
                    className="block py-1.5 text-sm text-gray-600 hover:text-green-700"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* ================= MOBILE / TABLET DRAWER (STACK STYLE) ================= */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeDrawer}
          />

          {/* Drawer */}
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-white text-black shadow-2xl transition-transform duration-300">
            {/* Drawer Header */}
            <div className="flex items-center gap-3 px-4 py-4 border-b">
              {menuStack.length > 0 ? (
                <button
                  onClick={goBack}
                  className="text-sm font-medium"
                >
                  ← Back
                </button>
              ) : (
                <span className="font-semibold text-lg">Menu</span>
              )}

              <button
                onClick={closeDrawer}
                className="ml-auto"
              >
                <X />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="p-4 space-y-2 overflow-y-auto">
              {/* Root Categories */}
              {!currentMenu &&
                categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => openCategory(cat)}
                    className="w-full flex justify-between items-center py-3 font-medium border-b"
                  >
                    {cat.name}
                    <span className="text-lg">›</span>
                  </button>
                ))}

              {/* Sub Categories */}
              {currentMenu &&
                currentMenu.items.map((item: string) => (
                  <Link
                    key={item}
                    href="/products"
                    onClick={closeDrawer}
                    className="block py-2 text-gray-600"
                  >
                    {item}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
