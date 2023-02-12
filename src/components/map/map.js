import {Map, Marker, GeolocateControl } from "react-map-gl";
import {config} from "../../config"
import "./map.css"
import { useState } from "react";

const apiKey = config.mapboxToken;

function MyMap() {

  const [markers, setMarkers] = useState([
    {
      longitude: -122.431297,
      latitude: 37.7749,
    },
    {
      longitude: -74.005974,
      latitude: 40.712776,
    }
  ]);
  


  return (
    <div className="map-container">
      <Map
        mapboxAccessToken={apiKey}
        initialViewState={{
          longitude: -76.534293,
          latitude: 3.372799,
          zoom: 15,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker longitude={-76.534293} latitude={3.372799} anchor="top" >
          <img src="./markerIcon.png" width="80" height="80" 
            onLoad={() => console.log("Image Loaded")}
            onError={() => console.log("Error Loading Image")}
          />
        </Marker>

      </Map>
    </div>
  );
}
export default MyMap;
