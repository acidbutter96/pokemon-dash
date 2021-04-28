import React from 'react'

import {
    Container,
    BoardContainer,
} from './styles'

import HomeBoard from '../../components/HomeBoard'
import Footer from '../../components/Footer'
import RandomPanel from '../../components/RandomPanel'

const Home: React.FC = () => {
    return (
        <Container>
            <BoardContainer>
                <HomeBoard />
            </BoardContainer>
            <RandomPanel />
            <Footer />
        </Container>
    )
}

export default Home