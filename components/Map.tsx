"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet'
import { icon } from 'leaflet'

export default function Map(){
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [gps, setGps] = useState<boolean>(false);

    // Get positions based on IP if GPS is not available
    const fallbackToIPBasedLocation = () => {
      fetch('http://ip-api.com/json')
        .then((response) => response.json())
        .then((data) => {
          const { lat, lon } = data;
          setLatitude(lat);
          setLongitude(lon);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error getting user location:', error);
          setIsLoading(false);
        });
    };
  
    // Update map position when GPS is available
    const handleLocationFound = (e: any) => {
      const { lat, lng } = e.latlng;
      const map = useMap();

      setLatitude(lat);
      setLongitude(lng);

      if (latitude && longitude) {
        map.setView([latitude, longitude], 13);
      }
    };

    // to place a marker on the current position
    const LocationMarker = () => {
      useMapEvents({
        locationfound: handleLocationFound,
      });
  
      return latitude && longitude ? (
        <Marker position={[latitude, longitude]} icon={currentLocationMarkerIcon}/>
      ) : null;
    };

    // @ts-ignore
    const currentLocationMarkerIcon = new icon({
        iconUrl: '/dark-mode-location.svg',
        iconSize: [28, 28],
        iconAnchor: [14, 28],
    })

    // button to moe map to current location
    const MapViewButton = () => {
        const map = useMap();
    
        const handleMapView = () => {
          if (latitude && longitude) {
            map.setView([latitude, longitude], 13);
          }
        };
    
        return (
          <button onClick={handleMapView} style={{ position: 'absolute', bottom: '40px', right: '35px', zIndex: 1000  }}>
            < Image src='/dark-mode-location-button.svg' width={64} height={64} alt="Current position"/>
          </button>
        );
    }

    // Get user location
    useEffect(() => {
        fallbackToIPBasedLocation();
        if (navigator.geolocation) {
          navigator.geolocation.watchPosition(
            (position) => {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
              setGps(true);
              setIsLoading(false);
            },
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported');
          fallbackToIPBasedLocation();
        }
      }, []);

    return (
      <div style={{ height: '500px', width: '100%' }}>
        {isLoading ? (
          <div className='text-center'>Loading map...</div>
        ) : (
          <MapContainer center={[latitude || 0, longitude || 0]} zoom={13} style={{height: '500px', width: '100%'}}>
             <TileLayer
            attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url= "https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=OQP6uIuVio7WAmQJlqFEbWwLLjgxuZ7NNg6eUQV61fJKfIiKEmYPqv5vFmyXiaWZ"
            />
            {gps && <LocationMarker />}
            <div>
                <MapViewButton />
            </div>

          </MapContainer>
        )}
      </div>
    );
  }