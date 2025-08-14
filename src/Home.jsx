import { useState } from "react";

const Home = () => {


    const [data, SetData] = useState('');


    const [name, SetName] = useState('');

    const [error, SetError] = useState('');

    const [loading, SetLoading] = useState(false);
    
    const HandleSubmit = () => {

        SetError("");
        SetData(null);
        SetLoading(true);

       

        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

        
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
            <div>
                <h1>HOMEPAGE</h1>
                <p>Welcome to the Pokemon World!!!</p>
               
               <input
          value={name}
          onChange={(e) => SetName(e.target.value)}
          placeholder="Enter Pokémon name"
        />
        <button onClick={HandleSubmit}>Search</button>

        <div></div>

        {loading && <p style={{ color: "blue" }}>{loading}</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        

        

        {data &&  <div><h1>{data.name}</h1> 

        <img
              src={data.sprites.front_default}
              alt={data.name}
              style={{ width: "150px" }}
            />

                    <img
              src={data.sprites.back_default}
              alt={data.name}
              style={{ width: "150px" }}
            />
             </div>}

            </div>
        </div>
     );
}



 
export default Home;