import React, { useState } from 'react'
import { IoMdAdd, IoMdEye } from 'react-icons/io'

import {
    Container,
    NumberContainer,
    PokeNumber,
    PokeType,
    PokeImage,
    PokeName,
    PokebuttonContainer,
    PreviewButton,
    AddButton,
    ImageContainer,
} from './styles'

import { getPokemonInfo } from '../../providers/pokeapi'
import { IPokemon } from '../../hooks/pokemon/index'

import { capitalize } from '../../utils/capitalize'

type PokemonCardProps = {
    id: number;
    /* pokenumber: number;
    type: string;
    pokeimage: string;
    pokename: string; */
}

interface IPokemonCard {
    name: string;
    sprites: {
        front_default: string;
    };
    types: {
        slot: string;
        name: string;
        id: number;
    }[]
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id }) => {
    const [pokeInfo, setPokeInfo] = useState<IPokemon>({
        name: '',
        sprites: {
            front_default: ''
        },
        types: [
            {
                slot: '1',
                name: '',
                id: 1,
            }
        ]
    })

    if (pokeInfo.name === '') {
        getPokemonInfo(id)
            .then(response => {
                setPokeInfo(response[0])
            })
    }


    return (
        <Container>
            <NumberContainer>
                {id}
            </NumberContainer>
            <PokeNumber />
            <PokeType>
                {capitalize(pokeInfo?.types[0]?.name || '')}
            </PokeType>
            <PokeImage>
                <PokebuttonContainer>
                    <PreviewButton>
                        <IoMdAdd />
                    </PreviewButton>
                    <AddButton>
                        <IoMdEye />
                    </AddButton>
                </PokebuttonContainer>
                <ImageContainer>
                    <img src={pokeInfo?.sprites.front_default} alt="Charmander" />
                </ImageContainer>
            </PokeImage>
            <PokeName>
                {capitalize(pokeInfo !== undefined ? pokeInfo?.name : '')}
            </PokeName>
        </Container>
    )
}

export default PokemonCard