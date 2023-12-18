import { useEffect, useCallback } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

import Image from 'next/image';

export default function LocationPicker({position, setPosition, setPromptAccepted}) {
  const map = useMap();

  // Create a custom icon instance
  const locationIcon = L.icon({
    iconUrl: '/location.svg',
    iconSize: [40, 40], // Adjust the size of the icon as needed
  });


  function getIpPosition() {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        if(data.latitude && data.longitude)
        {
          map.setView([data.latitude, data.longitude], map.getZoom());
          setPosition([map.getCenter().lat, map.getCenter().lng])
        }
      });
  }

  const onMove = useCallback(() => {
    setPosition([map.getCenter().lat, map.getCenter().lng])
  }, [map])

  useEffect(() => {
    setPosition([map.getCenter().lat, map.getCenter().lng])
    map.locate().on("locationfound", function (e) {
      if (e.latlng) {
        console.log("location found")
        map.setView(e.latlng, map.getZoom());
        setPosition([map.getCenter().lat, map.getCenter().lng])
        setPromptAccepted(true);
      }
    })
      .on("locationerror", function (e) {
        getIpPosition();
        setPromptAccepted(false);
      });

      map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 999,
      }}
    >
      <Image width="32" height="32" src="/location.svg" alt="marker" />
      {position != null && [position.lat, position.lng]}
    </div>
  )
}