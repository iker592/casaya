import React from 'react';
import { Search, Bell } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="bg-gray-100 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[300px] relative bg-white rounded-full shadow-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search City, Address or Ad #"
              className="w-full pl-12 pr-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#5bc0de] text-gray-600"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="min-w-[100px] px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5bc0de] text-gray-700 font-medium shadow-sm flex items-center justify-center">
              Rent
              <svg className="ml-2 h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <button className="min-w-[100px] px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5bc0de] text-gray-700 font-medium shadow-sm flex items-center justify-center">
              Type
              <svg className="ml-2 h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <button className="min-w-[100px] px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5bc0de] text-gray-700 font-medium shadow-sm flex items-center justify-center">
              Beds
              <svg className="ml-2 h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <button className="min-w-[100px] px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5bc0de] text-gray-700 font-medium shadow-sm">
              All Filters
            </button>

            <button className="min-w-[120px] px-6 py-3 bg-[#5bc0de] text-white rounded-full hover:bg-[#4ca8c5] focus:outline-none focus:ring-2 focus:ring-[#5bc0de] font-medium shadow-sm flex items-center justify-center gap-2">
              <Bell className="h-4 w-4" />
              Save Alert
            </button>

            <button className="p-3 text-gray-500 hover:text-gray-700">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Alerts</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}