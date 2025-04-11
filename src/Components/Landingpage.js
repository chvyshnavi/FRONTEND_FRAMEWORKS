import React from 'react';
import './Landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Crowdsourced Mapping</h1>
      </header>
      <main className="landing-main">
        <h2>Welcome to Crowdsourced Mapping</h2>
        <p>
          Your one-stop solution for collaborative mapping. Join our community to contribute and discover locations around the world.
        </p>
        <div className="button-group">
          <a href="/signin" className="btn">Sign In</a>
          <a href="/signup" className="btn btn-secondary">Sign Up</a>
        </div>
      </main>
      <footer className="landing-footer">
        <p>© 2025 Crowdsourced Mapping. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
