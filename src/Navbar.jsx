import { Link } from "react-router-dom";
import "./navbar.css";



const Nabvar = () => {
    return ( 
         <div className="Navbar">
        <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Pokedex">Pokedex</Link>
      </div>
      <button className="settings-btn">Settings</button>
    </div>
     );
}
 
export default Nabvar;