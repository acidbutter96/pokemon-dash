import React from 'react'
import { useParams } from 'react-router-dom'

import {
    Container,
    BoardContainer,
} from './styles'

import AttributesBoard from '../../components/AttributesBoard'
import Footer from '../../components/Footer'
import RandomPanel from '../../components/RandomPanel'

interface IAttributesParams {
    id: string;
}

const PokemonAttributes: React.FC = () => {
    const { id } = useParams<IAttributesParams>();

    return (
        <Container>
            <BoardContainer>
                <AttributesBoard id={id} />
            </BoardContainer>
            <Footer />
        </Container>
    )
}

export default PokemonAttributes