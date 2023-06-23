import { MapContainer, TileLayer} from 'react-leaflet'

import LocationMarker from './LocationMarker';

export default function Map({ height = "40vh", width = "40vh", pick = true}){
    return (
      <div style={{ height: height, width: width }}>
          <MapContainer center={[0,0]} zoom={13} style={{height: height, width: '100%'}}>
             <TileLayer
            attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url= "https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=OQP6uIuVio7WAmQJlqFEbWwLLjgxuZ7NNg6eUQV61fJKfIiKEmYPqv5vFmyXiaWZ"
            />
            <LocationMarker />
          </MapContainer>
      </div>
    );
  }