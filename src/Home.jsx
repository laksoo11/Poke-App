import { useState } from "react";

import "./Home.css";



const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const Home = () => {


    const [data, SetData] = useState('');
    const [name, SetName] = useState('');
    const [error, SetError] = useState('');
    const [loading, SetLoading] = useState(false);
    
    const HandleSubmit = () => {

        SetError("");
        SetData(null);
        SetLoading(true);

       

        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)

        
        .then((res) => {
            if (!res.ok) {

          throw new Error("Server not found");
        }
            return res.json();
            
        })
        .then(data => {
            // SetLoading('Loading...')
            
            SetData(data);
            console.log(data);

        
        })
        .catch(() => {
            
            SetError("You have entered a wrong Pokémon. Please check the spelling!");

        })
         .finally(() => {
        SetLoading(false); // Stop loading
      });

    };



   return (
    <div className="home-container">
      <div className="content-wrapper">
        
        <p>Welcome to the Pokemon World!!!</p>

        <input
          value={name}
          onChange={(e) => SetName(e.target.value)}
          placeholder="Enter Pokémon name"
        />
        <button onClick={HandleSubmit}>Search</button>

        {loading && <p style={{ color: "blue" }}>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {data && (

           <div className="pokedex-card">
          <h2 className="pokemon-name">{data.name}</h2>


        {/* Show types with colored labels */}
            <div>
              {data.types.map((t) => (
                <span
                  key={t.type.name}
                  className="pokemon-type"
                  style={{
                    background: typeColors[t.type.name],
                    color: "#fff",
                    margin: "0 5px",
                  }}
                >
                  {t.type.name}
                </span>
              ))}
            </div>
          

        
            

            {/* Pokémon images */}
            <img
             src={data.sprites.other["official-artwork"].front_default}
              alt={data.name}
              className="pokemon-artwork"
            />
            <img
              src={data.sprites.back_default}
              alt={data.name}
              style={{ width: "150px", height: "150px", marginTop: "10px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};


 
export default Home;