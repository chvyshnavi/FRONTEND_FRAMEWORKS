import React, { useState, useEffect } from "react";
import AddLocation from './AddLocation';
import LocationList from './LocationList';
import MapView from './MapView';
import Landingpage from "./Landingpage";
import Signin from "./Signin";
import Signup from "./Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from '../contexts/AuthContext';

function App() {
    // Initialize state with data from localStorage
    const [locations, setLocations] = useState(() => {
        const savedLocations = localStorage.getItem('locations');
        return savedLocations ? JSON.parse(savedLocations) : [];
    });

    // Save to localStorage whenever locations change
    useEffect(() => {
        localStorage.setItem('locations', JSON.stringify(locations));
    }, [locations]);

    const handleAddLocation = (newLocation) => {
        setLocations([...locations, newLocation]);
    };

    const handleDeleteLocation = (id) => {
        setLocations(locations.filter(location => location.id !== id));
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-content">
                    <h1></h1>
                </div>
            </nav>

        <Router>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Landingpage />} />
                {/* <Route path="/MapView"     element={<MapView />} /> */}
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/map" element={
                    
                    <>
                        <AddLocation
                            onAdd={handleAddLocation}
                            onDelete={handleDeleteLocation}
                            locations={locations}
                        />

                        <LocationList locations={locations} />
                        {/* <MapView locations={locations} /> */}
                    </>
                } />
                </Routes>
            </AuthProvider>
        </Router>
        </div>
    );
}

export default App;
