import React from 'react'

import {
    Container,
    BoardContainer,
} from './styles'

import PokedexBoard from '../../components/PokedexBoard'
import Footer from '../../components/Footer'

const Home: React.FC = () => {
    return (
        <Container>
            <BoardContainer>
                <PokedexBoard />
            </BoardContainer>
            <Footer />
        </Container>
    )
}

export default Home