import React, { useState } from "react";
import "../Components/Style.css";

const LocationList = ({ locations, onDelete }) => {
  const [filter, setFilter] = useState("");

  const filteredLocations = locations.filter((loc) =>
    filter ? loc.category === filter : true
  );

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this location?')) {
      onDelete(id);
    }
  };

  return (
    <div className="location-list">
      <h2>Contributed Locations</h2>
      <select className="category-filter" onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Landmark">Landmark</option>
        <option value="Hazard">Hazard</option>
        <option value="Business">Business</option>
        <option value="Event">Event</option>
      </select>
      {filteredLocations.length === 0 ? (
        <p className="no-locations">No locations found</p>
      ) : (
        <div className="location-grid">
          {filteredLocations.map((loc) => (
            <div key={loc.id} className="location-card">
              <h3>{loc.title}</h3>
              <p className="description">{loc.description}</p>
              <p><strong>Category:</strong> {loc.category}</p>
              <p><strong>Coordinates:</strong> {loc.latitude}, {loc.longitude}</p>
              <button 
                className="delete-btn"
                onClick={() => handleDelete(loc.id)}
              >
                Delete Location
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationList;