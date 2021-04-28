import React from 'react';
import {
    Container,
} from './styles';

interface Pokemon {
    id: string;
}

interface IPokemonCard {
    pokemon: Pokemon[]; // Array<Pokemon>
};

const PokemonCard: React.FC<IPokemonCard> = ({ pokemon }) => {
    return (
        <Container>
        </Container>
    )
}