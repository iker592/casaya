import React from 'react';
import { MapPin } from 'lucide-react';

export default function Map() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-gray-50">
        <MapPin className="h-16 w-16 text-[#5bc0de] mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Map Preview</h3>
        <p className="text-gray-600 max-w-sm">
          To enable the interactive map, please add your Google Maps API key to the Map component.
        </p>
      </div>
    </div>
  );
}