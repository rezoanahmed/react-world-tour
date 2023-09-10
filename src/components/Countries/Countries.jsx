import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries]= useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = country =>{
        // console.log("country")   
        // console.log(country);
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div>
                <h2>Visited Countries: {visitedCountries.length}</h2>
                <ul>
                {
                    visitedCountries.map(element => <li>{element}</li>)
                }
                </ul>
            </div>
            <div className='countries'>
            {
                countries.map(element => <Country country={element} key={element.cca3} handleVisitedCountry={handleVisitedCountry}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;