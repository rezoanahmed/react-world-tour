import "../../App.css"
const Country = ({ country }) => {
    // console.log(country);
    const { name, flags, capital, subregion, area } = country;
    return (
        <>
                <div className="country">
                    <h1>Name: {name?.common}</h1>
                    <img src={flags?.png} alt={flags?.png} />
                    <h4>Capital: {capital}</h4>
                    <h4>Region: {subregion}</h4>
                    <h4>Area: {area} km<sup>2</sup></h4>

                </div>

        </>
    );
};

export default Country;