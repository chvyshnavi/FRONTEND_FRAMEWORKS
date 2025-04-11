import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Set up default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Create a component to handle map clicks
const LocationMarker = ({ onLocationSelect }) => {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      onLocationSelect(lat, lng);
    },
  });
  return null;
};

const MapView = ({ locations, onLocationSelect }) => {
  return (
    <div className="map-container">
      <MapContainer 
        center={[20.5937, 78.9629]} 
        zoom={5} 
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {/* Add the click handler component */}
        <LocationMarker onLocationSelect={onLocationSelect} />
        
        {/* Render existing locations */}
        {locations.map((location) => (
          <Marker 
            key={location.id} 
            position={[location.latitude, location.longitude]}
          >
            <Popup>
              <h3>{location.title}</h3>
              <p>{location.description}</p>
              <p><strong>Category:</strong> {location.category}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <p className="map-instruction">Click anywhere on the map to select coordinates</p>
    </div>
  );
};

export default MapView;