import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import { useMemo, useState } from "react";

import {config} from "../../config"
import "./map.css"
import CITIES from './cities.json';
const apiKey = config.mapboxToken;

function MyMap() {

  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(()=> CITIES.map((city, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={city.longitude}
      latitude={city.latitude}
      anchor="bottom"
      onClick={e => {
        // If we let the click event propagates to the map, it will immediately close the popup
        // with `closeOnClick: true`
        e.originalEvent.stopPropagation();
        setPopupInfo(city);
      }}
    >
      <div className='marker'></div>
    </Marker>
    )
  ));

  return (
    <div className="map-container">
      <Map
        mapboxAccessToken={apiKey}
        initialViewState={{
          longitude: -76.534293,
          latitude: 3.372799,
          zoom: 15,
        }} 
        mapStyle='mapbox://styles/mapbox/light-v11'
        >
          
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />

        {pins}
      
      </Map>
    </div>
  );
}
export default MyMap;
