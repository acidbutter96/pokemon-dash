import React from 'react'
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
import { IoMdAdd, IoMdEye } from 'react-icons/io'

type PokemonCardProps = {
    pokenumber: number;
    id: string;
    type: string;
    pokeimage: string;
    pokename: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, pokeimage, pokename, pokenumber, type }) => {

    return (
        <Container>
            <NumberContainer>
                {pokenumber}
            </NumberContainer>
            <PokeNumber />
            <PokeType>
                {type}
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
                    <img src={pokeimage} alt="Charmander" />
                </ImageContainer>
            </PokeImage>
            <PokeName>
                {pokename}
            </PokeName>
        </Container>
    )
}

export default PokemonCard