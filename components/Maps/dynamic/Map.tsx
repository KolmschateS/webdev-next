"use client"
import { MapContainer, TileLayer} from 'react-leaflet'

import LocationMarker from './LocationMarker';
import LocationPicker from './LocationPicker';

export default function Map({ height = "40vh", width = "40vh", pick = true, position, setPosition, promptAccepted, setPromptAccepted}){
    return (
      <div style={{ height: height, width: width }}>
          <MapContainer center={[0,0]} zoom={13} style={{height: height, width: '100%'}}>
             <TileLayer
            attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url= "https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=OQP6uIuVio7WAmQJlqFEbWwLLjgxuZ7NNg6eUQV61fJKfIiKEmYPqv5vFmyXiaWZ"
            />
            {pick ? 
            <LocationPicker position={position} setPosition={setPosition} setPromptAccepted={setPromptAccepted}/>
            :
            <LocationMarker position={position} setPosition={setPosition} promptAccepted={promptAccepted} setPromptAccepted={setPromptAccepted}/>
            }
          </MapContainer>
      </div>
    );
  }