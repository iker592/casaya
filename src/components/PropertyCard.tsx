import React from 'react';
import { Heart, Maximize2, Mail } from 'lucide-react';

interface PropertyCardProps {
  images: string[];
  price: string;
  verified: boolean;
  type: string;
  postedTime: string;
  beds: string;
  baths: string;
  sqft: string;
  address: string;
}

export default function PropertyCard({
  images,
  price,
  verified,
  type,
  postedTime,
  beds,
  baths,
  sqft,
  address,
}: PropertyCardProps) {
  const [currentImage, setCurrentImage] = React.useState(0);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={images[currentImage]}
          alt="Property"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <Maximize2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentImage === index ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">{price}</h3>
            {verified && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                Verified
              </span>
            )}
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#5bc0de] text-white rounded-md hover:bg-[#4ca8c5]">
            <Mail className="h-4 w-4" />
            Contact
          </button>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <span>{type}</span>
          <span className="mx-2">•</span>
          <span>{postedTime}</span>
        </div>
        <div className="flex items-center gap-4 text-gray-700 mb-2">
          <span>{beds}</span>
          <span>•</span>
          <span>{baths}</span>
          <span>•</span>
          <span>{sqft}</span>
        </div>
        <p className="text-gray-600">{address}</p>
      </div>
    </div>
  );
}