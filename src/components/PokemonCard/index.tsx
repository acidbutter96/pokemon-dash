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
import { colorbytype } from '../../utils/colorbytype'

type PokemonCardProps = {
    id: number;
    typeName: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, typeName }) => {
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

    const typeNamed = typeName === 'auto' ? pokeInfo?.types[0]?.name : typeName

    return (
        <Container>
            <NumberContainer>
                {id}
            </NumberContainer>
            <PokeNumber />
            <PokeType
                typeColor={colorbytype(typeNamed.toLowerCase())}
            >
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
                    <img src={pokeInfo?.sprites.front_default} alt={`${pokeInfo?.types[0]?.name}`} />
                </ImageContainer>
            </PokeImage>
            <PokeName>
                {capitalize(pokeInfo !== undefined ? pokeInfo?.name.split("-")[0] : '')}
            </PokeName>
        </Container>
    )
}

export default PokemonCard