import React, { useState } from "react";
import MapView from "./MapView";


const AddLocation = ({ onAdd, onDelete, locations }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [category, setCategory] = useState("");

  const handleLocationSelect = (lat, lng) => {
    setLatitude(lat.toFixed(6));
    setLongitude(lng.toFixed(6));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !latitude || !longitude || !category) {
      alert("All fields are required!");
      return;
    }

    const newLocation = {
      id: Date.now(),
      title,
      description,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      category,
    };





    

    onAdd(newLocation);
    setTitle("");
    setDescription("");
    setLatitude("");
    setLongitude("");
    setCategory("");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this location?")) {
      onDelete(id);
    }
  };

  return (
    <div className="add-location-container">
      <div className="add-location">
        <h2>Add a Location</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
          
          <div className="coordinates-container">
            <input 
              type="number" 
              placeholder="Latitude" 
              value={latitude} 
              onChange={(e) => setLatitude(e.target.value)}
              readOnly 
            />
            <input 
              type="number" 
              placeholder="Longitude" 
              value={longitude} 
              onChange={(e) => setLongitude(e.target.value)}
              readOnly 
            />
          </div>
          <textarea 
            placeholder="Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Landmark">Landmark</option>
            <option value="Hazard">Hazard</option>
            <option value="Business">Business</option>
            <option value="Event">Event</option>
          </select>
          <button type="submit">Add Location</button>
        </form>
      </div>

      <MapView locations={locations} onLocationSelect={handleLocationSelect} />

      <div className="location-list">
        <h2>Added Locations</h2>
        <div className="location-grid">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              <h3>{location.title}</h3>
              <p className="description">{location.description}</p>
              <p><strong>Category:</strong> {location.category}</p>
              <p><strong>Coordinates:</strong> {location.latitude}, {location.longitude}</p>
              <button 
                className="delete-btn"
                onClick={() => handleDelete(location.id)}
              >
                Delete Location
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddLocation;