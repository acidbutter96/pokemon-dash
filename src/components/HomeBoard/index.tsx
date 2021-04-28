import React from 'react';
import PokemonCard from '../PokemonCard';

import {
    Container,
    Filters,
    Selector,
    PokemonContainer,
} from './styles'

const HomeBoard: React.FC = ({ children }) => {
    const kindPokemon = [
        {
            id: 1,
            name: 'Fire'
        },
        {
            id: 2,
            name: 'Water'
        },
        {
            id: 3,
            name: 'Earth'
        },
        {
            id: 4,
            name: 'Air'
        },
    ]

    const pokemons = [

    ]

    return (
        <Container>
            <Filters>
                <Selector name="filter" id="filterselect">
                    <option value="" selected disabled>
                        Select one filter
                    </option>
                    {kindPokemon.map(element => <option value={element.id} key={element.id}>{element.name}</option>)}
                </Selector>
            </Filters>
            <PokemonContainer>
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </PokemonContainer>
        </Container>
    )
}

export default HomeBoard;