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
import { useFireStore } from '../../hooks/firebase/firestore'

type PokemonCardProps = {
    id: number;
    typeName: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, typeName }) => {
    const {
        savePokemon,
    } = useFireStore()

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
            <PokeType
                typeColor={colorbytype(typeNamed.toLowerCase())}
            >
                {capitalize(typeNamed || '')}
            </PokeType>
            <PokeImage>
                <PokebuttonContainer>
                    <AddButton
                        onClick={() => savePokemon(`${id}`)}
                    >
                        <IoMdAdd />
                    </AddButton>
                    <PreviewButton
                        href={`/pokemon/attributes/${id}`}
                        target='_blank'
                    >
                        <IoMdEye />
                    </PreviewButton>
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