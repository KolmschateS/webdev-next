import { useEffect, useCallback } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

import Image from 'next/image';

export default function LocationPicker({position, setPosition}) {
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
        map.setView([data.latitude, data.longitude], map.getZoom());
        setPosition([map.getCenter().lat, map.getCenter().lng])
      });
  }

  const onMove = useCallback(() => {
    setPosition([map.getCenter().lat, map.getCenter().lng])
  }, [map])

  useEffect(() => {
    setPosition([map.getCenter().lat, map.getCenter().lng])
    map.locate().on("locationfound", function (e) {
      if (e.latlng) {
        map.setView(e.latlng, map.getZoom());
        setPosition([map.getCenter().lat, map.getCenter().lng])
      }
    })
      .on("locationerror", function (e) {
        getIpPosition();
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
      <Image width="32" height="32" src="/location.svg" />
      {position != null && [position.lat, position.lng]}
    </div>
  )
}