import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";



const Nabvar = () => {


  const [darkMode, setDarkMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);


   // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };


    return ( 
         <div className="Navbar">
        <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Pokedex">Pokedex</Link>
      </div>

      <button className="settings-btn" onClick={() => setShowSettings(!showSettings)}>Settings ⚙️ </button>

      {/* Settings Panel */}
      {showSettings && (
        <div className="settings-panel">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider round"></span>
          </label>
          <span className="mode-text">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
          </div>
      )}

    </div>
     );
};
 
export default Nabvar;