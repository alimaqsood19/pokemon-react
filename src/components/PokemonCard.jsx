import React from 'react';

const PokemonCard = ({pokemonName, pokemonImg, pokemonAbilities}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={`${pokemonImg}`} className="card-img-top" alt="Pokemon Image" />
                <div className="card-body">
                    <h5 classNameName="card-title">{pokemonName.toUpperCase()}</h5>
                    <p className="card-text">
                        <ul>
                        {pokemonAbilities.map(ability => (
                            <li>
                                {ability.ability.name}
                            </li>
                        ))}
                        </ul>
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default PokemonCard;