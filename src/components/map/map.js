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
      longitude={city.coordinates.coordinates[1]}
      latitude={city.coordinates.coordinates[0]}
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

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.coordinates.coordinates[1])}
            latitude={Number(popupInfo.coordinates.coordinates[0])}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.properties.title} | {' '}
              {popupInfo.properties.description}
            </div>
            <img width="100%" src={popupInfo.image} />
          </Popup> )}
      
      </Map>
    </div>
  );
}
export default MyMap;
