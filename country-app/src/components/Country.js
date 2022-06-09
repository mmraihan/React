import React from 'react'

export const Country = (props) => {
    const {country} =props;
    const {name, flags, capital, population, area} = country;
  return (
    <article>
        <div>
            <img src={flags.png} alt= {name.common}/>
            <h3>Name: {name.common}</h3>  
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3> 
            <h3>Area Code: {area}</h3>        

        </div>
    </article>
  )
}
