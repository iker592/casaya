import React from 'react';
import { Home } from 'lucide-react';

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="bg-[#5bc0de] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={onMenuClick}
              className="text-white p-2 hover:bg-[#4ca8c5] rounded-md"
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center ml-4">
              <Home className="h-8 w-8 text-white" />
              <span className="ml-2 text-white text-2xl font-semibold">CasaYA</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:bg-[#4ca8c5] px-3 py-2 rounded-md">Landlords</a>
            <a href="#" className="text-white hover:bg-[#4ca8c5] px-3 py-2 rounded-md">Rent Report</a>
            <a href="#" className="text-white hover:bg-[#4ca8c5] px-3 py-2 rounded-md">Blog</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:bg-[#4ca8c5] px-3 py-2 rounded-md">Login</button>
            <button className="bg-white text-[#5bc0de] px-4 py-2 rounded-md hover:bg-gray-100">
              Post a Rental
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}