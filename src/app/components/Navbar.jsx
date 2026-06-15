"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-3xl font-extrabold tracking-tight">
          <span className="text-blue-600">Uni</span>
          <span className="text-gray-900">Portal</span></a>
        <div className="hidden md:flex items-center gap-10">
          <a href="#home" className="text-gray-700 font-medium hover:text-blue-600 transition">Home</a>
          <a href="#schools" className="text-gray-700 font-medium hover:text-blue-600 transition">Schools</a>
          <a href="#faq" className="text-gray-700 font-medium hover:text-blue-600 transition">FAQ</a>
        </div>
        <a href="#schools"
          className="hidden md:block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300">
          Explore Schools</a>
        <button
          type="button" aria-label="Toggle Menu" className="md:hidden text-3xl text-gray-800"
          onClick={() => setMenuOpen((prev) => !prev)}>
        {menuOpen ? "✕" : "☰"}</button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col p-4 gap-4">
            <a
              href="#home"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a href="#schools" className="text-gray-700 font-medium hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}>Schools</a>
            <a href="#faq" className="text-gray-700 font-medium hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href="#schools"className="bg-blue-600 text-white px-5 py-3 rounded-xl text-center font-semibold hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}>Explore Schools</a>
          </div>
        </div>
      )}
    </nav>
  );
}