import { useState, useEffect } from 'react';
import { Marker, useMap, Popup } from 'react-leaflet';
import L from 'leaflet';

export default function LocationMarker()
  {
    const [position, setPosition] = useState([0,0]);

    const map = useMap();

    // Create a custom icon instance
    const locationIcon = L.icon({
      iconUrl:  '/location.svg',
      iconSize: [40, 40], // Adjust the size of the icon as needed
    });


    function getIpPosition()
    {
      fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        map.setView([data.latitude, data.longitude], map.getZoom());
      });
    }

    useEffect(() => {
        map.locate().on("locationfound", function(e) {
        if (e.latlng) {
            setPosition([e.latlng.lat, e.latlng.lng]);
            map.setView(e.latlng, map.getZoom());
          }
        })
        .on("locationerror", function(e) {
          getIpPosition();
        });
      }, [map]);

    return position === null ? null : (
      <Marker position={[position[0], position[1]]} icon={locationIcon}>
      </Marker>
    )
  }