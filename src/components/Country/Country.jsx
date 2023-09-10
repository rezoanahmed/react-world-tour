import { useState } from "react";
import "../../App.css"
import "./Country.css"
const Country = ({ country, handleVisitedCountry }) => {
    // console.log(country);
    const [visited, isVisited] = useState(false)
    const handleVisited = () =>{
        isVisited(!visited)
    }
    const { name, flags, capital, subregion, area, cca3 } = country;

    // console.log(handleVisitedCountry);
    return (
        <>
                <div className={`country ${visited? "visited":""}`}>
                    <h1>Name: {name?.common}</h1>
                    <img src={flags?.png} alt={flags?.png} />
                    <h3>Capital: {capital}</h3>
                    <h3>Region: {subregion}</h3>
                    <h3>Area: {area} km<sup>2</sup></h3>
                    <p>Code: {cca3}</p>
                    <button onClick={()=>handleVisitedCountry(country.name.common)}>Add to visited</button>
                    <button onClick={handleVisited}>{visited?"Visited":"Not Visited"}</button>
                    {/* {visited?"I have visited":"I will visit"} */}
                </div>
                    

        </>
    );
};

export default Country;