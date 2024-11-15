import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

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
         center: { lat: 43.6532, lng: -79.3832 },
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

       const markers = [
         {
           position: { lat: 43.661663, lng: -79.3832 },
           price: "$2529+"
         },
         {
           position: { lat: 43.6532, lng: -79.426003 },
           price: "$2225+"
         }
       ];

       markers.forEach(markerInfo => {
         // Create div for custom marker
         const markerElement = document.createElement('div');
         markerElement.style.padding = '4px 8px';
         markerElement.style.background = '#5bc0de';
         markerElement.style.color = 'white';
         markerElement.style.borderRadius = '4px';
         markerElement.style.fontSize = '13px';
         markerElement.style.fontWeight = 'bold';
         markerElement.style.whiteSpace = 'nowrap'; // Prevents wrapping
         markerElement.style.textAlign = 'center';
         markerElement.innerText = markerInfo.price;

         const overlay = new google.maps.OverlayView();
         overlay.onAdd = function() {
           overlay.getPanes().overlayImage.appendChild(markerElement);
         };
         
         overlay.draw = function() {
          const pos = overlay.getProjection().fromLatLngToDivPixel(markerInfo.position);
          if (pos) {
            markerElement.style.position = 'absolute';
            const width = markerElement.offsetWidth;
            markerElement.style.left = (pos.x - width/2) + 'px';
            markerElement.style.top = pos.y - 12 + 'px';
          }
         };

         overlay.setMap(map);
       });
     }
   });
 }, []);

 return <div ref={mapRef} className="w-full h-full rounded-lg shadow-md" />;
}