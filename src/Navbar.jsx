import { Link } from "react-router-dom";



const Nabvar = () => {
    return ( 
        <div>
            <div className="Navbar">
                <Link to = "/">Home</Link>
                <Link to = "/Pokedex">Pokedex</Link>
            </div>
        </div>
     );
}
 
export default Nabvar;