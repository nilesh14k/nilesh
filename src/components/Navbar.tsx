'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Nilesh Kumar
        </Link>

        <div className="hidden md:flex space-x-6 font-medium">
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        <button
          className="md:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="/about" className="block">
            About
          </Link>
          <Link href="/projects" className="block">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

        </div>
      )}
    </nav>
  )
}

export default Navbar
