"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map(){
    return (
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: "75vh", width: "100%"}}>
        <TileLayer
          attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url= "https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=OQP6uIuVio7WAmQJlqFEbWwLLjgxuZ7NNg6eUQV61fJKfIiKEmYPqv5vFmyXiaWZ"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
  }