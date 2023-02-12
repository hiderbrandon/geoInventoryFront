import Map, { GeolocateControl } from "react-map-gl";
import {config} from "../../config"
import "./map.css"


const apiKey = config.mapboxToken;

function MyMap() {
  return (
    <div className="map-container">
      <Map
        mapboxAccessToken={apiKey}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
    </div>
  );
}
export default MyMap;
