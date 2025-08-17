import React from 'react';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Site name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-black">Site name</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-black hover:text-gray-600 transition-colors">Page</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">Page</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">Page</a>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Button
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a href="#" className="block px-3 py-2 text-black hover:text-gray-600">Page</a>
              <a href="#" className="block px-3 py-2 text-black hover:text-gray-600">Page</a>
              <a href="#" className="block px-3 py-2 text-black hover:text-gray-600">Page</a>
              <button className="w-full mt-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Button
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
