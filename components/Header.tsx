'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'Astra';
          src: url('/astra-font/Astra.woff2') format('woff2'),
               url('/astra-font/Astra.woff') format('woff'),
               url('/astra-font/Astra.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
      
      <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img 
                  src="/FWL logo white trans.png" 
                  alt="Future Wave Labs" 
                  className="h-16 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/about" 
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
              >
                About
              </Link>
              <Link 
                href="/careers" 
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
              >
                Careers
              </Link>
              <Link 
                href="/contact" 
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white/80 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
} 