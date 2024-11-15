import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PropertyCard from './components/PropertyCard';
import Map from './components/Map';
import Sidebar from './components/Sidebar';

const SAMPLE_PROPERTIES = [
  {
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    ],
    price: '$2529 - $3119',
    verified: true,
    type: 'Apartment',
    postedTime: '1 day ago',
    beds: '1-3 BED',
    baths: '1-2 BATH',
    sqft: '665 FT²',
    address: '88 Harbour Street - Toronto, ON'
  },
  {
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
    ],
    price: '$2225+',
    verified: true,
    type: 'Condo',
    postedTime: '2 days ago',
    beds: '2 BED',
    baths: '2 BATH',
    sqft: '800 FT²',
    address: '6030 Bathurst Street - Toronto, ON'
  }
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <SearchBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="hidden lg:block h-[calc(100vh-200px)] sticky top-8">
            <Map />
          </div>
          <div className="space-y-6">
            {SAMPLE_PROPERTIES.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;