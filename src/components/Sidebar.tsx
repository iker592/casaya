import React from 'react';
import { Mail, ChevronLeft } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 w-80 bg-[#5bc0de] transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="h-full flex flex-col">
          <button 
            onClick={onClose}
            className="p-6 hover:bg-[#4ca8c5] flex items-center text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <nav className="flex-1 px-6 space-y-6 py-6">
            <a href="#" className="block text-3xl font-light text-white hover:bg-[#4ca8c5] rounded px-4 py-2">
              Post a Rental
            </a>
            <a href="#" className="block text-3xl font-light text-white hover:bg-[#4ca8c5] rounded px-4 py-2">
              Login
            </a>
            <a href="#" className="block text-3xl font-light text-white hover:bg-[#4ca8c5] rounded px-4 py-2">
              Create Account
            </a>
            <a href="#" className="block text-3xl font-light text-white hover:bg-[#4ca8c5] rounded px-4 py-2">
              Alerts
            </a>
            <a href="#" className="block text-3xl font-light text-white hover:bg-[#4ca8c5] rounded px-4 py-2">
              FAQs
            </a>
            <a href="#" className="block text-3xl font-light text-white hover:bg-[#4ca8c5] rounded px-4 py-2">
              Rent Report
            </a>
            <a href="#" className="block text-3xl font-light text-white hover:bg-[#4ca8c5] rounded px-4 py-2">
              Landlords
            </a>
            <a href="#" className="block text-3xl font-light text-white hover:bg-[#4ca8c5] rounded px-4 py-2">
              Jack Armstrong
            </a>
            <a href="#" className="block text-3xl font-light text-white hover:bg-[#4ca8c5] rounded px-4 py-2">
              Raising the Roof
            </a>
            <a href="#" className="block text-3xl font-light text-white hover:bg-[#4ca8c5] rounded px-4 py-2">
              Careers
            </a>
            <a href="#" className="block text-3xl font-light text-white hover:bg-[#4ca8c5] rounded px-4 py-2">
              Blog
            </a>
          </nav>

          <div className="p-6 border-t border-[#4ca8c5]">
            <button className="flex items-center space-x-3 text-2xl font-light text-white hover:bg-[#4ca8c5] w-full p-4 rounded">
              <Mail className="h-6 w-6" />
              <span>Contact us</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}