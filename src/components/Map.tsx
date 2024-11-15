import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

// Get API key from environment variable
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS;

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: 'weekly'
    });
 
    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 43.6532, lng: -79.3832 }, // Toronto coordinates
          zoom: 12,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: true,
          styles: [
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [{ color: "#616161" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }]
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }]
            }
          ]
        });
 
        // Add markers for properties
        const markers = [
          {
            position: { lat: 43.6532, lng: -79.3832 },
            title: "$2529 - $3119",
            content: "100 Parkway Forest Drive"
          },
          {
            position: { lat: 43.6447, lng: -79.3890 },
            title: "$2225+",
            content: "25 Lower Simcoe Street" 
          }
        ];
 
        markers.forEach(markerInfo => {
          const marker = new google.maps.Marker({
            position: markerInfo.position,
            map,
            title: markerInfo.title
          });
 
          const infoWindow = new google.maps.InfoWindow({
            content: `<div class="p-2">
              <h3 class="font-bold">${markerInfo.title}</h3>
              <p>${markerInfo.content}</p>
            </div>`
          });
 
          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });
        });
      }
    });
  }, []);
 
  return <div ref={mapRef} className="w-full h-full rounded-lg shadow-md" />;
 }