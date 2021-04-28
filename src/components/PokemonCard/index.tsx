import React from 'react'
import {
    Container,
    NumberContainer,
    PokeNumber,
    PokeType,
    PokeImage,
    PokeName,
} from './styles'

import charmander from '../../assets/images/temp/charmander.svg'


const PokemonCard: React.FC = () => {

    return (
        <Container>
            <NumberContainer>
                4
            </NumberContainer>
            <PokeNumber />
            <PokeType>
                Fire
            </PokeType>
            <PokeImage>
                <img src={charmander} alt="Charmander" />
            </PokeImage>
            <PokeName>
                Charmander
            </PokeName>
        </Container>
    )
}

export default PokemonCard