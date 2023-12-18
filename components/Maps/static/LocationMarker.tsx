import { useState, useEffect } from 'react';
import { Marker, useMap } from 'react-leaflet';
import L from 'leaflet';

export default function LocationMarker()
  {
    const [position, setPosition] = useState([0,0]);
    const [show, setShow] = useState(false);

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
            setShow(true);
          }
        })
        .on("locationerror", function(e) {
          getIpPosition();
        });
      }, [map]);

    return show ? (
      <Marker position={[position[0], position[1]]} icon={locationIcon}>
      </Marker>
    ) : null;
  }