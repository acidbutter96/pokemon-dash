import React, { useEffect, useState } from 'react'
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

interface IPokemonCardProps {
    id: number;
    typeName: string;
}

const RandomPokemonCard: React.FC<IPokemonCardProps> = ({ id, typeName }) => {
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

    useEffect(() => {
        if (pokeInfo.name === '') {
            getPokemonInfo(id)
                .then(response => {
                    setPokeInfo(response[0])
                })
        }
    }, [id])


    const typeNamed = typeName === 'auto' ? pokeInfo?.types[0]?.name : typeName

    return (
        <Container>
            <NumberContainer>
                {id}
            </NumberContainer>
            <PokeNumber />
            <PokeImage>
                <PokebuttonContainer>
                    <PreviewButton
                        href={`/pokemon/attributes/${id}`}
                        target='_blank'
                    >
                        <IoMdEye />
                    </PreviewButton>
                    <AddButton>
                        <IoMdAdd />
                    </AddButton>
                </PokebuttonContainer>
                <ImageContainer>
                    <img src={pokeInfo?.sprites.front_default} alt={`${pokeInfo?.types[0]?.name}`} />
                </ImageContainer>
            </PokeImage>
            <PokeType
                typeColor={colorbytype(typeNamed.toLowerCase())}
            >
                {capitalize(typeNamed || '')}
            </PokeType>
            <PokeName>
                {capitalize(pokeInfo !== undefined ? pokeInfo?.name.replace('-', ' ') : '')}
            </PokeName>
        </Container>
    )
}

export default RandomPokemonCard