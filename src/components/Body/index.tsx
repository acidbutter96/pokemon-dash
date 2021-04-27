import React from 'react';

import {
    Container,
} from './styles'

const Body: React.FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Body;