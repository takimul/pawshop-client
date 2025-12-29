"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            PetWell<span className="text-black">BD</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/products" className="nav-link">Products</Link>
            <Link href="/vet" className="nav-link">Vet Care</Link>
            <Link href="/about" className="nav-link">About</Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/cart" className="relative">
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </Link>
            <Link
              href="/checkout"
              className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90"
            >
              Checkout
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-4 space-y-3">
            <Link onClick={() => setOpen(false)} href="/" className="block nav-link">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} href="/products" className="block nav-link">
              Products
            </Link>
            <Link onClick={() => setOpen(false)} href="/vet" className="block nav-link">
              Vet Care
            </Link>
            <Link onClick={() => setOpen(false)} href="/about" className="block nav-link">
              About
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/checkout"
              className="block text-center mt-3 bg-primary text-white py-2 rounded-lg"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
