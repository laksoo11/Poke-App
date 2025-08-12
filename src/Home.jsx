import { useState } from "react";

const Home = () => {


    const [data, SetData] = useState('');


    const [name, SetName] = useState('');
    
    const HandleSubmit = () => {

        console.log(name);

        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
            return res.json();
            
        })
        .then(data => {
            
            SetData(data);
            console.log(data);
        
        });

    }



    return ( 
        <div className="home-container">
            <div>
                <h1>HOMEPAGE</h1>
                <p>Welcome to the Pokemon World!!!</p>
                <button onClick={HandleSubmit}>Search</button>
                <input value={name} onChange={(e) => SetName(e.target.value)}></input>
                <h1>{data.name}</h1>
            </div>
        </div>
     );
}



 
export default Home;