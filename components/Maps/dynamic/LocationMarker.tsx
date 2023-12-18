import { useEffect } from 'react';
import { Marker, useMap } from 'react-leaflet';
import L from 'leaflet';

export default function LocationMarker({position, setPosition, promptAccepted, setPromptAccepted})
  {
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
        if(data.latitude && data.longitude)
        {
          map.setView([data.latitude, data.longitude], map.getZoom());
        }
      });
    }

    useEffect(() => {
      console.log(promptAccepted)
        map.locate().on("locationfound", function(e) {
        if (e.latlng) {
            console.log("location found")
            setPosition([e.latlng.lat, e.latlng.lng]);
            map.setView(e.latlng, map.getZoom());
            setPromptAccepted(true);
          }
        })
        .on("locationerror", function(e) {
          getIpPosition();
          setPromptAccepted(false);
        });
      }, [map]);

    return position === undefined || promptAccepted ? null : (
      <Marker position={position} icon={locationIcon}>
      </Marker>
    )
  }